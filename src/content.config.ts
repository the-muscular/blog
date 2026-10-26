import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { topicNames, doodleKeys, colourKeys, legacyColours } from './lib/doodles.mjs';

// Pages CMS saves an untouched optional field as an empty string or null
const optional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), schema.optional());

// An illustration or colour the site doesn't know (renamed, or from the first design)
// falls back to the topic's default instead of failing the build
const known = (keys: string[], aliases: Record<string, string> = {}) =>
  z.preprocess((v) => {
    const key = typeof v === 'string' ? (aliases[v] ?? v) : v;
    return keys.includes(key as string) ? key : undefined;
  }, z.string().optional());

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.enum(topicNames as [string, ...string[]]),
    excerpt: optional(z.string()),
    doodle: known(doodleKeys),
    colour: known(colourKeys, legacyColours),
    cover_image: optional(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
