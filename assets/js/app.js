import { SITE } from './config.js';
import { projectStrings } from './projects-data.js';
import { DEFAULT_LANG, LANGUAGES, TRANSLATIONS } from './translations.js';

const STORAGE_KEY = 'hafiy.lang';

const supported = LANGUAGES.map((lang) => lang.code);
const langButtons = document.querySelectorAll('[data-lang]');
const optionalLinks = document.querySelectorAll('[data-link]');
const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
const emptyState = document.querySelector('[data-empty]');

function isSupported(code) {
  return supported.includes(code);
}

function readStoredLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(saved) ? saved : null;
  } catch (error) {
    return null;
  }
}

function storeLang(code) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch (error) {
    /* storage unavailable: preference simply is not persisted */
  }
}

function fill(text) {
  return text.replace('{year}', String(new Date().getFullYear()));
}

function resolveLink(key) {
  if (key === 'github') return SITE.github;
  return SITE.projects[key] || '';
}

function syncOptionalLinks() {
  optionalLinks.forEach((link) => {
    const target = resolveLink(link.dataset.link);
    if (target) {
      link.href = target;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.hidden = false;
    } else {
      link.removeAttribute('href');
      link.hidden = true;
    }
  });
}

function setPressedState(code) {
  langButtons.forEach((button) => {
    const active = button.dataset.lang === code;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
  });
}

function applyFilter(category) {
  let visible = 0;

  filterButtons.forEach((button) => {
    const active = button.dataset.filter === category;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
  });

  cards.forEach((card) => {
    const show = category === 'all' || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible += 1;
  });

  if (emptyState) {
    emptyState.hidden = visible > 0;
  }
}

function dictionary(lang) {
  return { ...TRANSLATIONS[lang], ...projectStrings(lang) };
}

function applyLang(code) {
  const lang = isSupported(code) ? code : DEFAULT_LANG;
  const dict = dictionary(lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (typeof value !== 'string') return;
    if (element.tagName === 'META') {
      element.setAttribute('content', fill(value));
    } else {
      element.textContent = fill(value);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dict[element.dataset.i18nAria];
    if (typeof value === 'string') {
      element.setAttribute('aria-label', value);
    }
  });

  setPressedState(lang);
  syncOptionalLinks();
}

function init() {
  const initial = readStoredLang() || DEFAULT_LANG;

  applyLang(initial);

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const code = button.dataset.lang;
      storeLang(code);
      applyLang(code);
    });
  });

  if (filterButtons.length > 0) {
    applyFilter('all');

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.filter));
    });
  }

  syncOptionalLinks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
