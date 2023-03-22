import { Layout } from "../../components/layout";
import { Section } from "../../components/util/section";
import { Container } from "../../components/util/container";
import Head from "next/head";
import { HeroBanner } from "../../components/blocks/heroBanner";
import ContactForm from "../../components/forms/contactForm";

const Page = () => (
  <Layout>
    <Head>
      <title>Websites Brisbane | Hatch Head</title>
    </Head>
    <HeroBanner
      tagline="Capabilities"
      headline="Product Websites"
      text="Product websites should explain how your product solves a user’s problem. Ideally, it should take the lead into an active user."
    />
    <Section>
      <Container width={"medium"}>
        <div className="prose dark:prose-invert">
          <h1>When do you need a product website?</h1>

          <ul className="list-disc">
            <li>Improve user acquisition</li>
            <li>Improve user engagement</li>
            <li>Designing new features </li>
          </ul>

          <h3>Overview</h3>
          <p>
            There's no more important touch point in the marketing of product
            than the product website. It's a crucial element that introduces the
            world to the products' mission, it's primary selling point and, in
            some cases, serves as the single point for user acquisition.
          </p>

          <h3>What deliverables can you expect from a Product Website?</h3>

          <ul className="list-disc">
            <li>Responsive Website</li>
            <li>UX Copy</li>
            <li>Landing pages</li>
            <li>Seo-optimised pages</li>
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
