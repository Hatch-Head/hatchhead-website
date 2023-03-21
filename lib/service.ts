import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import slugify from "slugify";

const postsDirectory = join(process.cwd(), "posts");

const isDev = process.env.NODE_ENV === "development";
export interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
  excerpt: string;
  banner?: string;
  author: Author;
  tags: string[];
  published: boolean;
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
    published: true,
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
    .filter((post) => post.published !== false || isDev)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts as Post[];
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export type Tag = {
  count: number;
  label: string;
};

export type Tags = {
  [key: string]: Tag;
};

export function getTags() {
  const slugs = getPostSlugs();
  const postTags = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.published !== false || isDev)
    .flatMap(({ tags }) => tags);

  const tags = postTags.reduce((acc, tag) => {
    const slug = slugify(tag).toLowerCase();
    acc[slug] = acc[slug]
      ? { count: acc[slug].count + 1, label: tag }
      : { count: 1, label: tag };
    return acc;
  }, {} as Tags);

  return tags;
}
