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
  author?: Author;
  tags: string[];
}

export interface Author {
  name: string;
  avatar: string;
}

export function getAuthor(slug: string) {
  const dir = join(process.cwd(), "content/authors");
  const loc = join(dir, `${slug}.md`);
  const fileContents = fs.readFileSync(loc, "utf8");
  const { data } = matter(fileContents);

  const author = {
    ...data,
  } as Author;

  return author;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const author = data.author ? getAuthor(data.author) : undefined;

  const post = {
    ...data,
    content,
    slug: realSlug,
    author,
  } as Post;

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
