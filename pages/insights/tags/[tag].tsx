import { Layout } from "../../../components/layout";
import {
  type Post,
  type Tag,
  getAllPosts,
  getTags,
} from "../../../lib/service";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { type NextPage } from "next";
import AuthorComponent from "../../../components/Author";
import Link from "next/link";
import Tags from "../../../components/Tags";

interface PageProps {
  posts: Post[];
  tag: Tag;
}
interface Params extends ParsedUrlQuery {
  tag: string;
}

const BlogPost: NextPage<PageProps> = ({ posts, tag }) => {
  return (
    <Layout>
      <header className="border-0 border-b-2 border-neutral-900">
        <div className="container max-w-4xl py-40">
          <Link href="/insights" className="font-bold text-neutral-450">
            Insights
          </Link>{" "}
          <h2 className=" text-2xl md:text-3xl lg:text-4xl mb-12 font-bold text-neutral-1000 dark:text-white">
            {tag.label}
          </h2>
          <p className="text-base dark:text-neutral-400 mb-12">
            Articles tagged with "{tag.label}"
          </p>
        </div>
      </header>
      {posts.map((post) => (
        <article className="border-0 border-b border-neutral-900 group py-20">
          <div className="container py-12 flex flex-col max-w-4xl">
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <h1 className="font-bold text-xl md:text-2xl text-neutral-1000 mb-4 dark:text-white group-hover:text-primary dark:group-hover:text-gold">
                {post.title}
              </h1>
              <AuthorComponent
                time="5 min read"
                date={post.date}
                author={post.author}
              />
              <div className="text-base max-w-3xl my-12 text-neutral-600 dark:text-neutral-300">
                {post.excerpt}
              </div>{" "}
            </Link>

            <Tags tags={post.tags} center={false} linkPrefix="insights/tags" />
          </div>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getTags();
  const paths = Object.keys(tags).map((tag) => {
    return {
      params: { tag },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const { tag } = context.params!;
  const allPosts = getAllPosts();

  const tags = getTags();
  const key = Object.keys(tags).find((t) => t === tag);
  if (!key) {
    return { notFound: true };
  }
  const theTag = tags[key];

  const posts = allPosts.filter((p) => p.tags.includes(theTag.label));

  return {
    props: {
      posts,
      tag: theTag,
    },
  };
};

export default BlogPost;
