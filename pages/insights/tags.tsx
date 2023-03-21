import { Layout } from "../../components/layout";
import { type Tags, getTags } from "../../lib/service";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { type NextPage } from "next";
import Link from "next/link";
import TagsPills from "../../components/Tags";

interface PageProps {
  tags: Tags;
}
interface Params extends ParsedUrlQuery {
  tag: string;
}

const BlogPost: NextPage<PageProps> = ({ tags }) => {
  const tagNames = Object.keys(tags).map((key) => tags[key].label);
  return (
    <Layout>
      {" "}
      <header className="border-0 border-b-2 border-neutral-900">
        <div className="container max-w-4xl py-40">
          <Link href="/insights" className="font-bold text-neutral-450">
            Insights
          </Link>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl mb-12 font-bold text-neutral-1000 dark:text-white">
            Tags
          </h2>
          <p className="text-base dark:text-neutral-400 mb-12">
            Read about specific topics
          </p>
          <TagsPills
            tags={tagNames}
            linkPrefix="/insights/tags"
            center={false}
          />
        </div>
      </header>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async () => {
  const tags = getTags();
  return {
    props: {
      tags,
    },
  };
};

export default BlogPost;
