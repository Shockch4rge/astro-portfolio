import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export const remarkReadingTime = () => {
  return (tree: unknown, file: any) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    file.data.astro.frontmatter.estimatedReadTime = readingTime.text;
  };
}