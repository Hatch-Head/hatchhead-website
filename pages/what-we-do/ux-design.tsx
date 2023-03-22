import { Layout } from "../../components/layout";
import { Section } from "../../components/util/section";
import { Container } from "../../components/util/container";
import Head from "next/head";
import { HeroBanner } from "../../components/blocks/heroBanner";
import ContactForm from "../../components/forms/contactForm";

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

          <ul className="list-disc">
            <li>Improve user acquisition</li>
            <li>Improve user engagement aka 'stickiness'</li>
            <li>Adding or changing features</li>
          </ul>

          <h3>Overview</h3>
          <p>
            It's essential that your users are able to experience features and
            navigate your digital app or website with as few challenges as
            possible. To accomplish this, you must understand the users, their
            habits, motivations and general mental models they're in when
            engaging your product. Optimising for the user's experience is an
            endless pursuit, but one that pays dividends.
          </p>

          <h3>What deliverables can you expect from UX Optimisation?</h3>
          <ul className="list-disc">
            <li>Wireframes</li>
            <li>User flows</li>
            <li>Information Architecture Map</li>
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
