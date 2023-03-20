import { Layout } from "../../components/layout";
import { type Post, getAllPosts } from "../../lib/service";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { type NextPage } from "next";
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
      <header className="flex h-[500px] justify-center items-center container max-w-4xl pt-40">
        <h1 className="text-center font-bold text-xl md:text-3xl text-neutral-900 dark:text-white">
          {post.title}
        </h1>
      </header>
      {post.banner && (
        <div
          className="w-full mb-24 h-[500px] bg-black bg-cover bg-center"
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
  const _html = await remark().use(html).process(post.content);

  return {
    props: {
      post,
      _html: _html.toString(),
    },
  };
};

export default BlogPost;
