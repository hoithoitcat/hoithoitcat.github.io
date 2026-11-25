import { ABOUT } from './data/about.js';
import { PUBLICATIONS } from './data/publications.js';
import { ACTIVITIES } from './data/activities.js';

function el(tag, className = '', value = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value) node.textContent = value;
  return node;
}

function renderAbout() {
  const root = document.getElementById('about-content');
  const bio = el('div', 'about-block');
  for (const paragraph of ABOUT.bio) bio.append(el('p', '', paragraph));
  root.append(bio);

  for (const [heading, lines] of [
    ['Research Interests', ABOUT.researchInterests],
    ['Education', ABOUT.education]
  ]) {
    const block = el('div', 'about-block');
    block.append(el('h3', '', heading));
    const list = el('ul', 'about-list');
    for (const line of lines) list.append(el('li', '', line));
    block.append(list);
    root.append(block);
  }
}

function renderPublications() {
  const root = document.getElementById('publication-sections');
  document.getElementById('publication-count').textContent =
    `${PUBLICATIONS.length} publication${PUBLICATIONS.length === 1 ? '' : 's'}`;
  const categories = [...new Set(PUBLICATIONS.map(p => p.category || 'Papers'))];
  for (const category of categories) {
    const group = el('div', 'publication-group');
    group.append(el('h3', '', category));
    const entries = PUBLICATIONS.filter(p => (p.category || 'Papers') === category)
      .sort((a, b) => b.year - a.year);
    const years = [...new Set(entries.map(p => p.year))];
    for (const year of years) {
      const row = el('div', 'publication-year-group');
      row.append(el('p', 'publication-year', String(year)));
      const list = el('ol', 'publication-list');
      for (const paper of entries.filter(p => p.year === year)) {
        const item = el('li', 'publication-item');
        item.append(el('p', 'pub-title', paper.title));
        if (paper.authors) item.append(el('p', 'pub-authors', paper.authors));
        if (paper.venue) item.append(el('p', 'pub-meta', paper.venue));
        if (paper.links?.length) {
          const links = el('div', 'pub-links');
          for (const link of paper.links) {
            if (!/^https:\/\//.test(link.url)) continue;
            const a = el('a', '', link.label);
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            links.append(a);
          }
          item.append(links);
        }
        list.append(item);
      }
      row.append(list);
      group.append(row);
    }
    root.append(group);
  }
}

function renderActivities() {
  const root = document.getElementById('activities-content');
  for (const section of ACTIVITIES) {
    const block = el('div', 'activity-block');
    block.append(el('h3', '', section.heading));
    for (const activity of section.items) {
      const row = el('div', 'activity-item');
      row.append(el('p', 'activity-date', activity.date));
      const content = el('div');
      content.append(el('p', 'activity-title', activity.title));
      if (activity.description) content.append(el('p', 'activity-desc', activity.description));
      row.append(content);
      block.append(row);
    }
    root.append(block);
  }
}

function initTheme() {
  const button = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme
    ? root.dataset.theme === 'dark' : systemDark.matches;
  const refresh = () => {
    const dark = isDark();
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  };
  button.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('academic-theme', next); } catch (_) {}
    refresh();
  });
  systemDark.addEventListener?.('change', refresh);
  refresh();
}

function initToTop() {
  const button = document.getElementById('to-top-button');
  const refresh = () => button.classList.toggle('visible', window.scrollY > 300);
  window.addEventListener('scroll', refresh, { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  refresh();
}

renderAbout();
renderPublications();
renderActivities();
initTheme();
initToTop();
document.getElementById('year').textContent = String(new Date().getFullYear());
