import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sisterhood = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sisterhood' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { sisterhood };
