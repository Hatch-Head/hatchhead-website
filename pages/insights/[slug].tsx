import { Layout } from "../../components/layout";
import { type Post, getAllPosts } from "../../lib/service";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { type NextPage } from "next";
import AuthorComponent from "../../components/Author";
import Link from "next/link";
import Tags from "../../components/Tags";
import { remark } from "remark";
import html from "remark-html";

interface PageProps {
  post: Post;
  _html: string;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPost: NextPage<PageProps> = ({ post, _html }) => {
  return (
    <Layout>
      <header className="flex flex-col pt-40 py-10 justify-center container max-w-4xl">
        <Link href="/insights" className="font-bold text-neutral-450">
          Insights
        </Link>
        <h1 className="font-bold text-xl md:text-3xl text-neutral-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-neutral-450 mb-12">{post.excerpt}</p>

        {post.author && (
          <AuthorComponent
            author={post.author}
            time="5 min read"
            date={post.date}
            className="mb-12"
          />
        )}

        <Tags tags={post.tags} center={false} />
      </header>
      {post.banner && (
        <div
          className="w-full mb-24 h-[500px] bg-black bg-cover bg-center saturate-0"
          style={{ backgroundImage: `url(${post.banner})` }}
        />
      )}
      <div
        className="space-y-12 container max-w-4xl dark:prose-invert blog-article pb-40 first:text-white [&>*:first-child]:text-lg [&>*:first-child]:mb-12 prose"
        dangerouslySetInnerHTML={{ __html: _html }}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  // This is where the error occurs
  const { slug } = context.params!;
  const posts = getAllPosts();

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return { notFound: true };
  }
  //const _html = await remark().use(html).process(post.content);
  const _html = await remark().use(html).process(post.content);

  return {
    props: {
      post,
      _html: _html.toString(),
    },
  };
};

export default BlogPost;
