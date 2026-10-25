import rss from '@astrojs/rss';
import site from '../data/site.json';
import { getPosts, excerptOf } from '../lib/posts.mjs';
import { url } from '../lib/url.mjs';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.intro,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: excerptOf(post),
      categories: [post.data.topic],
      link: url(`/posts/${post.id}/`),
    })),
  });
}
