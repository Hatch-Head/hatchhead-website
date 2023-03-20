import { getAllPosts, type Post } from "../lib/service";
import Link from "next/link";
import { Layout } from "../components/layout";
import DateFormatter from "../components/Date";
import { GetStaticProps } from "next";

export default function Home({ posts }: { posts: Post[] }) {
  //const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 12);

  return (
    <Layout>
      <header className="border-0 border-b-2 border-neutral-900">
        <div className="container max-w-4xl py-40">
          <h1 className=" text-2xl md:text-4xl font-bold text-neutral-1000 dark:text-white">
            Insights <span className="animate-float">🤔</span>
          </h1>
        </div>
      </header>
      <div className="">
        {recentPosts.map((post) => (
          <Link key={post.slug} href={`/insights/${post.slug}`}>
            <article className="border-0 border-b border-neutral-900 py-12">
              <div className="container py-12 flex flex-col max-w-4xl">
                <h1 className="font-bold text-xl text-neutral-1000 dark:text-white">
                  {post.title}
                </h1>
                <DateFormatter
                  dateString={post.date}
                  className="font-mono mb-8"
                />
                <div className="text-base max-w-3xl">{post.excerpt}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // This is where the error occurs
  const posts = getAllPosts();
  const props = { posts: posts };
  return { props };
};
