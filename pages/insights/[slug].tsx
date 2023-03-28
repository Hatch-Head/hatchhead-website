import { Layout } from "../../components/layout";
import { type Post, getAllPosts } from "../../lib/service";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { type NextPage } from "next";
import AuthorComponent from "../../components/Author";
import Link from "next/link";
import Tags from "../../components/Tags";
import ReactMarkdown, { type Components } from "react-markdown";
import Image from "next/image";
interface PageProps {
  post: Post;
  _html: string;
}
interface Params extends ParsedUrlQuery {
  slug: string;
}

const MarkdownComponents: Components = {
  img: ({ node, width, height, alt, src, ...props }) => (
    <Image
      src={src!}
      width={800}
      height={800}
      alt={alt || ""}
      className="w-full"
    />
  ),
};

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

        <Tags tags={post.tags} center={false} linkPrefix="insights/tags" />
      </header>
      {post.banner && (
        <div className="w-full mb-24 bg-[#2A2A2A] bg-contain bg-center bg-no-repeat p-0">
          <Image
            src={post.banner}
            width={1200}
            height={600}
            alt="Banner image for blog post"
            className="mx-auto"
          />
        </div>
      )}
      <div className="prose container dark:prose-invert max-w-4xl pb-40 [&>*:first-child]:text-lg [&>*:first-child]:mb-12">
        <ReactMarkdown components={MarkdownComponents}>{_html}</ReactMarkdown>
      </div>
      {/* <div
        className="space-y-12 container max-w-4xl dark:prose-invert blog-article pb-40 first:text-white [&>*:first-child]:text-lg [&>*:first-child]:mb-12 prose"
        dangerouslySetInnerHTML={{ __html: _html }}
      /> */}
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
  //const _html = await remark().use(html).process(post.content);

  return {
    props: {
      post,
      _html: post.content,
    },
  };
};

export default BlogPost;
