/* Drives the /changelog/ page: fetches normalised release data from the
 * /api/releases Pages Function, and renders it. Release notes are treated as
 * untrusted input and rendered through an escape-first Markdown subset. */

import { TRANSLATIONS, DEFAULT_LANG } from './translations.js';

const $ = (selector) => document.querySelector(selector);

/* Projects shown on the changelog. `dependencymanager` has no verified public
 * release feed, so it is included only to report that truthfully. */
const TRACKS = [
  { slug: 'timbr', name: 'Timbr' },
  { slug: 'dependencymanager', name: 'DependencyManager' }
];

const RELEASE_QUERY = TRACKS.map((track) => track.slug).join(',');
const PAGE_SIZE = 8;

const state = { data: null, filter: 'all', visible: PAGE_SIZE, loading: true, fetchError: false };

function currentLang() {
  return document.documentElement.getAttribute('lang') || DEFAULT_LANG;
}

function dict() {
  const lang = currentLang();
  return TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
}

function formatDate(iso) {
  return formatDateWithLang(iso, currentLang());
}

export function formatDateWithLang(iso, lang) {
  if (!iso) return '';
  const locale = lang === 'ar' ? 'ar' : lang === 'id' ? 'id' : 'en';
  try {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(iso));
  } catch {
    return String(iso).slice(0, 10);
  }
}

/* ---------- safe Markdown subset for untrusted release notes ---------- */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Inline formatting. Input is escaped first, then only a fixed set of safe tags
 * is produced, so raw HTML, scripts, and event handlers can never survive. */
export function renderInline(raw) {
  let text = escapeHtml(raw);
  text = text.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  text = text.replace(/\*\*([^*]+)\*\*/g, (_, bold) => `<strong>${bold}</strong>`);
  text = text.replace(/\*([^*]+)\*/g, (_, em) => `<em>${em}</em>`);
  return text;
}

/* Block Markdown to a safe HTML subset: headings, paragraphs, lists, code
 * blocks, blockquotes. Unsupported content degrades to plain paragraphs. */
export function renderMarkdown(markdown) {
  const md = String(markdown || '').replace(/\r\n/g, '\n');
  if (!md.trim()) return '';
  const lines = md.split('\n');
  let html = '';
  let paragraph = [];
  let list = [];
  let index = 0;

  const flushParagraph = () => {
    if (paragraph.length) {
      html += `<p>${paragraph.map(renderInline).join('<br>')}</p>`;
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      html += `<ul>${list.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`;
      list = [];
    }
  };

  while (index < lines.length) {
    const line = lines[index];
    if (/^\s*(?:```|~~~)/.test(line)) {
      flushParagraph();
      flushList();
      const buffer = [];
      index += 1;
      while (index < lines.length && !/^\s*(?:```|~~~)/.test(lines[index])) {
        buffer.push(lines[index]);
        index += 1;
      }
      index += 1;
      html += `<pre><code>${escapeHtml(buffer.join('\n'))}</code></pre>`;
      continue;
    }
    const heading = line.match(/^\s*(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      html += `<h4>${renderInline(heading[2])}</h4>`;
      index += 1;
      continue;
    }
    const item = line.match(/^\s*[-*+]\s+(.*)$/);
    if (item) {
      flushParagraph();
      list.push(item[1]);
      index += 1;
      continue;
    }
    const quote = line.match(/^\s*>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      html += `<blockquote>${renderInline(quote[1])}</blockquote>`;
      index += 1;
      continue;
    }
    if (line.trim() === '') {
      flushParagraph();
      flushList();
      index += 1;
      continue;
    }
    flushList();
    paragraph.push(line);
    index += 1;
  }
  flushParagraph();
  flushList();
  return html;
}

/* ---------- data helpers ---------- */

function trackEntries() {
  const projects = (state.data && state.data.projects) || {};
  return TRACKS.map((track) => ({
    slug: track.slug,
    name: track.name,
    result: projects[track.slug] || { status: 'unconfigured', releases: [] }
  }));
}

function projectName(slug) {
  const track = TRACKS.find((entry) => entry.slug === slug);
  return track ? track.name : slug;
}

function releasesFor(filter) {
  const releases = [];
  for (const entry of trackEntries()) {
    if (filter !== 'all' && filter !== entry.slug) continue;
    if (entry.result.status === 'ok' || entry.result.status === 'stale') {
      for (const release of entry.result.releases) releases.push(release);
    }
  }
  return releases.sort((a, b) => {
    const ta = a.date ? Date.parse(a.date) : -Infinity;
    const tb = b.date ? Date.parse(b.date) : -Infinity;
    return tb - ta;
  });
}

/* ---------- rendering ---------- */

function releaseNode(release) {
  const item = document.createElement('li');
  item.className = 'release';

  const head = document.createElement('div');
  head.className = 'release__head';
  if (state.filter === 'all') {
    const project = document.createElement('span');
    project.className = 'release__project ltr';
    project.setAttribute('dir', 'ltr');
    project.textContent = projectName(release.project);
    head.appendChild(project);
  }
  const version = document.createElement('span');
  version.className = 'release__version ltr';
  version.setAttribute('dir', 'ltr');
  version.textContent = release.version;
  head.appendChild(version);
  if (release.prerelease) {
    const badge = document.createElement('span');
    badge.className = 'release__prerelease';
    badge.textContent = dict()['changelog.prerelease'];
    head.appendChild(badge);
  }
  item.appendChild(head);

  const title = document.createElement('p');
  title.className = 'release__title';
  title.textContent = release.title || release.version;
  item.appendChild(title);

  const meta = document.createElement('p');
  meta.className = 'release__meta';
  const date = document.createElement('span');
  date.className = 'release__date';
  date.textContent = formatDate(release.date);
  meta.appendChild(date);
  const link = document.createElement('a');
  link.className = 'release__link';
  link.href = release.url || '#';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = dict()['changelog.view'];
  meta.appendChild(link);
  item.appendChild(meta);

  const notes = renderMarkdown(release.notes);
  if (notes) {
    const notesBox = document.createElement('div');
    notesBox.className = 'release__notes';
    notesBox.innerHTML = notes;
    item.appendChild(notesBox);
  }
  return item;
}

function renderStatusNotes(entries) {
  const box = $('#status-notes');
  box.textContent = '';
  const messages = dict();
  for (const entry of entries) {
    if (state.filter !== 'all' && state.filter !== entry.slug) continue;
    const status = entry.result.status;
    let text = '';
    let variant = '';
    if (status === 'unconfigured') {
      text = messages['changelog.unconfigured'].replace('{project}', entry.name);
    } else if (status === 'empty') {
      text = messages['changelog.empty.project'].replace('{project}', entry.name);
    } else if (status === 'stale') {
      text = messages['changelog.stale'].replace('{project}', entry.name);
      variant = ' changelog__note--warn';
    }
    if (text) {
      const note = document.createElement('p');
      note.className = `changelog__note${variant}`;
      note.textContent = text;
      box.appendChild(note);
    }
  }
}

function buildFilters(entries) {
  const box = $('#changelog-filters');
  box.textContent = '';
  const messages = dict();
  const add = (key, label) => {
    const button = document.createElement('button');
    button.type = 'button';
    const active = key === state.filter;
    button.className = `filter${active ? ' is-active' : ''}`;
    button.dataset.filter = key;
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    button.textContent = label;
    button.addEventListener('click', () => {
      state.filter = key;
      state.visible = PAGE_SIZE;
      render();
    });
    box.appendChild(button);
  };
  add('all', messages['projects.filter.all'] || 'All');
  for (const entry of entries) add(entry.slug, entry.name);
  box.hidden = false;
}

function renderReleases(releases) {
  const list = $('#releases-list');
  list.textContent = '';
  const shown = releases.slice(0, state.visible);
  for (const release of shown) list.appendChild(releaseNode(release));
  $('#load-more').hidden = releases.length <= state.visible;
}

function render() {
  const messages = dict();
  const checked = $('#checked-note');
  if (state.data && state.data.checkedAt) {
    checked.textContent = messages['changelog.checked'].replace('{date}', formatDate(state.data.checkedAt));
    checked.hidden = false;
  } else {
    checked.hidden = true;
  }

  if (state.loading) {
    $('#state-loading').hidden = false;
    $('#state-error').hidden = true;
    $('#state-empty').hidden = true;
    $('#changelog-filters').hidden = true;
    $('#releases-list').textContent = '';
    $('#status-notes').textContent = '';
    $('#load-more').hidden = true;
    return;
  }
  $('#state-loading').hidden = true;

  if (state.fetchError) {
    $('#state-error').hidden = false;
    $('#state-empty').hidden = true;
    $('#changelog-filters').hidden = true;
    $('#releases-list').textContent = '';
    $('#status-notes').textContent = '';
    $('#load-more').hidden = true;
    return;
  }
  $('#state-error').hidden = true;

  const entries = trackEntries();
  buildFilters(entries);

  const anyReleases = entries.some(
    (entry) => (entry.result.status === 'ok' || entry.result.status === 'stale') && entry.result.releases.length
  );
  const nothingUsable = entries.length > 0 && entries.every((entry) => entry.result.status === 'error' || entry.result.status === 'unconfigured');

  if (!anyReleases && nothingUsable) {
    $('#state-error').hidden = false;
    $('#state-empty').hidden = true;
    $('#releases-list').textContent = '';
    $('#status-notes').textContent = '';
    $('#load-more').hidden = true;
    return;
  }

  const releases = releasesFor(state.filter);
  renderReleases(releases);
  renderStatusNotes(entries);
  $('#state-empty').hidden = !(releases.length === 0 && $('#status-notes').children.length === 0);
}

async function load() {
  state.loading = true;
  state.fetchError = false;
  render();
  try {
    const response = await fetch(`/api/releases?projects=${RELEASE_QUERY}`, { headers: { accept: 'application/json' } });
    if (!response.ok) throw new Error(`status ${response.status}`);
    state.data = await response.json();
  } catch {
    state.fetchError = true;
  } finally {
    state.loading = false;
    state.visible = PAGE_SIZE;
    render();
  }
}

/* Bootstrap only runs in a browser, so the pure helpers can be unit tested. */
if (typeof document !== 'undefined' && typeof document.querySelectorAll === 'function') {
  $('#retry').addEventListener('click', load);
  $('#load-more').addEventListener('click', () => {
    state.visible += PAGE_SIZE;
    render();
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => render());
  });

  load();
}
