// Builds a link that works both locally and under a GitHub Pages sub-path.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => {
  if (/^(https?:|mailto:)/.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
};
