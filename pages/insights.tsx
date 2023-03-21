import { getAllPosts, type Post } from "../lib/service";
import Link from "next/link";
import { Layout } from "../components/layout";
import DateFormatter from "../components/Date";
import { GetStaticProps } from "next";
import AuthorComponent from "../components/Author";
import Tags from "../components/Tags";

export default function Home({ posts }: { posts: Post[] }) {
  //const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 12);

  return (
    <Layout>
      <header className="border-0 border-b-2 border-neutral-900">
        <div className="container max-w-4xl py-40">
          <h1 className="font-bold text-neutral-450">Insights</h1>
          <h2 className=" text-2xl md:text-3xl mb-12 font-bold text-neutral-1000 dark:text-white">
            Discover what we’ve uncovered{" "}
            <span className="animate-float inline-block">🤔</span>
          </h2>
          <p className="text-base">
            Sharing things we've learned through research and experience{" "}
          </p>
        </div>
      </header>
      <div className="">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="py-20"
          >
            <article className="border-0 border-b border-neutral-900 py-12 group">
              <div className="container py-12 flex flex-col max-w-4xl">
                <h1 className="font-bold text-2xl text-neutral-1000 mb-4 dark:text-white group-hover:text-primary dark:group-hover:text-gold">
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
                <Tags tags={post.tags} center={false} />
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
