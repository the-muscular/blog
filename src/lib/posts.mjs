import { getCollection } from 'astro:content';
import { url } from './url.mjs';

// Drafts show while running locally but never on the live site
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date - a.data.date);
}

export const postUrl = (post) => url(`/posts/${post.id}/`);

export const formatDate = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const plainText = (md = '') =>
  md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[#>*_`~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export function excerptOf(post) {
  if (post.data.excerpt) return post.data.excerpt;
  const text = plainText(post.body);
  return text.length > 160 ? `${text.slice(0, 157).replace(/\s+\S*$/, '')}…` : text;
}

export const readTime = (post) =>
  `${Math.max(1, Math.round(plainText(post.body).split(' ').length / 200))} min`;

export const coverImage = (post) => (post.data.cover_image ? url(post.data.cover_image) : null);
