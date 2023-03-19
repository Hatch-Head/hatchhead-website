import { Layout } from "../../components/layout";
import { Section } from "../../components/util/section";
import { Container } from "../../components/util/container";
import Head from "next/head";
import { HeroBanner } from "../../components/blocks/heroBanner";

const Page = () => (
  <Layout>
    <Head>
      <title>UX Design Brisbane | Hatch Head</title>
    </Head>
    <HeroBanner
      headline="UI Design"
      tagline="Capabilities"
      text="Optimising your desktop or mobile app's UX is an exercise in refinement - of reducing friction in delivering what users want."
    />
    <Section>
      <Container width={"medium"}>
        <div className="prose dark:prose-invert">
          <h1>When do you need a product website?</h1>

          <ul>
            <li>Improve user acquisition</li>
            <li>Improve user engagement</li>
            <li>Designing new features</li>
          </ul>

          <h3>Overview</h3>
          <p>
            There’s no more important touch point in the marketing of product
            than the product website. It’s a crucial element that introduces the
            world to the products’ mission, it’s primary selling point and, in
            some cases, serves as the single point for user acqusition.
          </p>

          <h3>What deliverables can you expect from a product website?</h3>
          <ul>
            <li>Responsive Website optimised for mobile and desktop</li>
            <li>UX Copy</li>
            <li>Landing pages</li>
            <li>SEO-optimised pages</li>
          </ul>
        </div>
      </Container>
    </Section>
  </Layout>
);

export default Page;
