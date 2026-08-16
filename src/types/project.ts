import type { z } from 'astro:content';
import type { projectSchema } from '../content.config';  // ← changed from '../content/config'

export type Project = z.infer<typeof projectSchema>;