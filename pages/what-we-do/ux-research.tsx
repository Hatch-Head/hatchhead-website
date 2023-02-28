import { Layout } from "../../components/layout";
import { Section } from "../../components/util/section";
import { Container } from "../../components/util/container";
import Head from "next/head";
import { HeroBanner } from "../../components/blocks/heroBanner";

const Page = () => (
  <Layout>
    <Head>
      <title>UX Research Brisbane | Hatch Head</title>
    </Head>
    <HeroBanner headline="UX Research" text="todo" />
    <Section>
      <Container width={"medium"}>
        <div className="prose dark:prose-invert">
          <h1>When do you need a UX Research?</h1>

          <ul>
            <li>TODO</li>
          </ul>

          <h3>Overview</h3>
          <p>TODO</p>

          <h3>What deliverables can you expect from a product website?</h3>
          <ul>
            <li>TODO</li>
          </ul>
        </div>
      </Container>
    </Section>
  </Layout>
);

export default Page;
