import { Layout } from "../components/layout";
import CaseStudyCard from "../components/case-studies/CaseStudyCard";
import { HeroBanner } from "../components/blocks/heroBanner";
import Head from "next/head";
import WorkList from "../components/blocks/work";

const Work = () => (
  <Layout>
    <Head>
      <meta name="description" content="Hatch Heads work" />
    </Head>

    <HeroBanner
      headline="A track of creations"
      text="Some of out selected favorites"
      size="small"
    />
    <WorkList />
  </Layout>
);

export default Work;
