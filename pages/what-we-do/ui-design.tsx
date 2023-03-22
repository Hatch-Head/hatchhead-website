import { Layout } from "../../components/layout";
import { Section } from "../../components/util/section";
import { Container } from "../../components/util/container";
import Head from "next/head";
import { HeroBanner } from "../../components/blocks/heroBanner";
import ContactForm from "../../components/forms/contactForm";

const Page = () => (
  <Layout>
    <Head>
      <title>UI Design Brisbane | Hatch Head</title>
    </Head>
    <HeroBanner
      headline="UI Design"
      text="Designing for the user"
      tagline="Capabilities"
    />
    <Section>
      <Container width={"medium"}>
        <div className="prose dark:prose-invert">
          <h1>When do you need UI &amp; Interaction Design</h1>

          <ul>
            <li>Improve the aesthetic look &amp; "feel" of your product</li>
            <li>Create a feeling of delight and professionalism</li>
            <li>
              Invoke unique elements of your brand into your product experience
            </li>
            <li>Create initial interest and desire in potential users</li>
          </ul>

          <h3>Description</h3>

          <p>
            User Interface (UI) and interaction design is the aesthetic choices
            that define what the user sees. It encompass colours, fonts,
            imagery, animations and the overall ‘look and feel’ of a product. In
            recent years, creating an aesthetic look that is consistent is being
            made possible with new tools and approaches, as well as
            off-the-shelf kits that can be modified to fit a certain tone. This
            has created a standard of quality that is impossible to ignore.
            These days, users have strong expectations that are, unfairly or
            not, set by the digital giants of Apple, Netflix, Uber and others.
          </p>

          <h3>What deliverables can you expect from UI &amp; Interaction?</h3>

          <ul>
            <li>Design Systems</li>
            <li>Style guides</li>
            <li>Iconography Library</li>
            <li>Animation Assets</li>
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
