import type { MarkdownHeading } from "astro";

export type Heading = MarkdownHeading & { subheadings: Heading[] };