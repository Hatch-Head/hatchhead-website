import { getAllPosts, getMostRecentPost, type Post } from "../lib/service";
import Link from "next/link";
import { Layout } from "../components/layout";
import DateFormatter from "../components/Date";
import { GetStaticProps } from "next";
import AuthorComponent from "../components/Author";
import FeaturedArticle from "../components/blocks/blog-feature";
import Tags from "../components/Tags";
import Head from "next/head";

export default function Home({ posts, latestPost }: { posts: Post[], latestPost: Post }) {
  //const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(1, 12); // Start at 1 since feature post is the first post


  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Insights about designing software from Hatch Head."
          key="description"
        />
      </Head>
      <header className="border-0 border-neutral-900">
        <div className="container py-40">

          <h1 className="text-xl md:text-xl lg:text:3xl mb-8 font-bold text-neutral-1000 dark:text-white">
            Insights about designing software from Hatch Head
          </h1>

        </div>
      </header>
      <div className="">
        <FeaturedArticle post={latestPost}></FeaturedArticle>



        {recentPosts.map((post) => (
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

              <Tags
                tags={post.tags}
                center={false}
                linkPrefix="/insights/tags"
              />
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // This is where the error occurs
  const posts = getAllPosts();
  const latestPost = getMostRecentPost();
  const props = { posts: posts, latestPost: latestPost };
  return { props };
};
