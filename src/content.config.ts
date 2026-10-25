import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { topicNames, doodleKeys, colourKeys } from './lib/doodles.mjs';

// Pages CMS saves an untouched optional field as an empty string or null
const optional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), schema.optional());

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.enum(topicNames as [string, ...string[]]),
    excerpt: optional(z.string()),
    doodle: optional(z.enum(doodleKeys as [string, ...string[]])),
    colour: optional(z.enum(colourKeys as [string, ...string[]])),
    cover_image: optional(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
