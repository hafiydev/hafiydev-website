/*
 * Cloudflare Pages Function: GET /api/releases
 *
 * Retrieves release data for hafiy_dev projects from each project's verified
 * public release feed, normalises it into one shape, caches it, and degrades
 * safely when a feed fails. Only hard-coded upstreams are ever contacted, so a
 * user can never make this Function fetch an arbitrary URL.
 *
 * Deploy note: Pages Functions in a top level `functions/` directory need no
 * extra Pages configuration. The Function response sets its own cache headers.
 */

/* Verified public release sources. Add an entry only after confirming that the
 * upstream returns public release data. Never build an upstream URL from user
 * input. */
const SOURCES = {
  timbr: {
    name: 'Timbr',
    kind: 'modrinth',
    url: 'https://api.modrinth.com/v2/project/LlEg5nIE/version',
    page: 'https://modrinth.com/plugin/timbr'
  }
};

const REQUEST_TIMEOUT_MS = 8000;
const CACHE_TTL_SECONDS = 900; /* 15 minutes of shared server side caching */
const USER_AGENT = 'hafiy-dev-website';

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=60',
      ...extraHeaders
    }
  });
}

function toIsoDate(value) {
  if (typeof value !== 'string' || value.trim() === '') return null;
  const time = Date.parse(value);
  if (Number.isNaN(time)) return null;
  return new Date(time).toISOString();
}

function cleanText(value) {
  return typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim() : '';
}

/* Normalise a Modrinth `/version` array into release entries. Drafts and
 * unlisted versions are excluded; prereleases keep their original status and are
 * flagged. */
export function normalizeModrinth(list, source, slug) {
  if (!Array.isArray(list)) return [];
  const releases = [];
  for (const version of list) {
    if (!version || typeof version !== 'object') continue;
    if (version.status && version.status !== 'listed') continue; /* draft, unlisted, archived */
    const versionNumber = cleanText(version.version_number);
    if (!versionNumber) continue;
    const date = toIsoDate(version.date_published);
    const title = cleanText(version.name) || versionNumber;
    const prerelease = version.version_type ? version.version_type !== 'release' : false;
    releases.push({
      project: slug,
      version: versionNumber,
      title,
      date,
      url: source.page,
      notes: cleanText(version.changelog),
      prerelease: Boolean(prerelease)
    });
  }
  return releases.sort(byDateDesc);
}

/* Normalise a GitHub releases array into the same release shape. */
export function normalizeGitHub(list, source, slug) {
  if (!Array.isArray(list)) return [];
  const releases = [];
  for (const release of list) {
    if (!release || typeof release !== 'object') continue;
    if (release.draft === true) continue;
    const tag = cleanText(release.tag_name);
    if (!tag) continue;
    const date = toIsoDate(release.published_at);
    releases.push({
      project: slug,
      version: tag,
      title: cleanText(release.name) || tag,
      date,
      url: cleanText(release.html_url) || source.page,
      notes: cleanText(release.body),
      prerelease: Boolean(release.prerelease)
    });
  }
  return releases.sort(byDateDesc);
}

function normalize(kind, payload, source, slug) {
  if (kind === 'modrinth') return normalizeModrinth(payload, source, slug);
  if (kind === 'github') return normalizeGitHub(payload, source, slug);
  return [];
}

function byDateDesc(a, b) {
  const ta = a.date ? Date.parse(a.date) : -Infinity;
  const tb = b.date ? Date.parse(b.date) : -Infinity;
  return tb - ta;
}

/* Build one project's result entry from freshly fetched releases. */
export function buildEntry(slug, releases) {
  return {
    status: releases.length ? 'ok' : 'empty',
    releases: releases.sort(byDateDesc),
    checkedAt: new Date().toISOString()
  };
}

function cacheKeyFor(slug) {
  return `https://cache.hafiy.internal/releases/${slug}`;
}

async function readCache(cache, slug) {
  if (!cache) return null;
  try {
    const hit = await cache.match(new Request(cacheKeyFor(slug)));
    if (!hit) return null;
    return await hit.json();
  } catch {
    return null;
  }
}

async function writeCache(cache, slug, entry) {
  if (!cache) return;
  try {
    const response = new Response(JSON.stringify(entry), {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': `public, max-age=${CACHE_TTL_SECONDS}`
      }
    });
    await cache.put(new Request(cacheKeyFor(slug)), response);
  } catch {
    /* cache is best effort only */
  }
}

async function fetchUpstream(source) {
  const res = await fetch(source.url, {
    headers: { accept: 'application/json', 'user-agent': USER_AGENT },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });
  if (!res.ok) throw new Error(`upstream status ${res.status}`);
  const payload = await res.json();
  return payload;
}

/* Fetch one configured source, falling back to cached data when it fails. */
async function resolveSource(cache, slug) {
  const source = SOURCES[slug];
  try {
    const payload = await fetchUpstream(source);
    const releases = normalize(source.kind, payload, source, slug);
    const entry = buildEntry(slug, releases);
    await writeCache(cache, slug, entry);
    return entry;
  } catch {
    const cached = await readCache(cache, slug);
    if (cached && Array.isArray(cached.releases) && cached.releases.length) {
      return { status: 'stale', releases: cached.releases, checkedAt: cached.checkedAt || null };
    }
    return { status: 'error', releases: [], checkedAt: null };
  }
}

export function parseRequestedSlugs(url) {
  const requested = url.searchParams.get('projects');
  if (!requested) return Object.keys(SOURCES);
  const slugs = requested
    .split(',')
    .map((slug) => slug.trim())
    .filter((slug) => /^[a-z0-9][a-z0-9-]{0,63}$/.test(slug));
  return [...new Set(slugs)].slice(0, 25);
}

export async function onRequestGet(context) {
  const cache = typeof caches !== 'undefined' ? caches.default : null;
  const requested = parseRequestedSlugs(new URL(context.request.url));

  const projects = {};
  const work = requested.map(async (slug) => {
    if (!Object.prototype.hasOwnProperty.call(SOURCES, slug)) {
      projects[slug] = { status: 'unconfigured', releases: [], checkedAt: null };
      return;
    }
    projects[slug] = await resolveSource(cache, slug);
  });
  await Promise.all(work);

  const checkedTimes = Object.values(projects)
    .map((entry) => entry.checkedAt)
    .filter(Boolean)
    .map((iso) => Date.parse(iso))
    .filter((time) => !Number.isNaN(time));

  const payload = {
    generatedAt: new Date().toISOString(),
    configured: Object.keys(SOURCES),
    checkedAt: checkedTimes.length ? new Date(Math.max(...checkedTimes)).toISOString() : null,
    projects
  };

  return jsonResponse(payload);
}
