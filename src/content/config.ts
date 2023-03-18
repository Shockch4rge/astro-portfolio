import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z
			.string()
			.or(z.date())
			.transform(val => new Date(val)),
		updatedAt: z
			.string()
			.or(z.date())
			.optional()
			.transform(str => (str ? new Date(str) : undefined)),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
