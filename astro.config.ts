import { defineConfig } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import { remarkReadingTime } from "./src/utils/plugins/remarkReadingTime.js";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: 'https://example.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        rehypeHeadingIds,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeAccessibleEmojis
      ],
    }),
    sitemap(),
    tailwind(),
  ],
});