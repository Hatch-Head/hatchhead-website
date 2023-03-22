import { Layout } from "../../components/layout";
import { Section } from "../../components/util/section";
import { Container } from "../../components/util/container";
import Head from "next/head";
import { HeroBanner } from "../../components/blocks/heroBanner";
import ContactForm from "../../components/forms/contactForm";

const Page = () => (
  <Layout>
    <Head>
      <title>Product Strategy Brisbane | Hatch Head</title>
    </Head>
    <HeroBanner
      tagline="Capabilities"
      headline="Product strategy"
      text="todo"
    />
    <Section>
      <Container width={"medium"}>
        <div className="prose dark:prose-invert">
          <h1>When do you need product strategy?</h1>

          <ul>
            <li>TODO</li>
          </ul>

          <h3>Overview</h3>
          <p>TODO</p>

          <h3>What deliverables can you expect from a product strategy?</h3>
          <ul>
            <li>TODO</li>
          </ul>
        </div>
      </Container>
    </Section>

    <Section>
      <ContactForm />
    </Section>
  </Layout>
);

export default Page;
