import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), eyebrow: z.string().default('Case study'), summary: z.string(), description: z.string(), number: z.string(),
    accent: z.enum(['coral', 'blue', 'green']).default('blue'), tags: z.array(z.string()).default([]), intro: z.string(),
    sections: z.array(z.object({ heading: z.string(), body: z.string() })).default([])
  })
});

export const collections = { projects };
