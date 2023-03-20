import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
const postsDirectory = join(process.cwd(), "posts");

export interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
  excerpt: string;
  banner?: string;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post = {
    ...data,
    content,
    slug: realSlug,
  } as Post;

  console.log("post", post);
  return post;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts as Post[];
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
