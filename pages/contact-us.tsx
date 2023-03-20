import { Layout } from "../components/layout";
import { HeroBanner } from "../components/blocks/heroBanner";
import Head from "next/head";
import { Section } from "../components/util/section";
import { Container } from "../components/util/container";
import ContactUsForm from "../components/forms/contactForm";
const ContactUs = () => (
  <Layout>
    <Head>
      <meta name="title" content="Hatch Head: Contact Us" />
      <meta name="description" content="Get in touch with Hatch Head" />
    </Head>

    <HeroBanner headline="Contact us" size="small" tagline="Get in touch" />

    <Section>
      <ContactUsForm />
    </Section>

    <Section className="mb-24">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Our Office</h1>

        <h2 className="text-2xl font-bold mb-4">Brisbane</h2>
        <a
          href="https://goo.gl/maps/KRjSJX6PK3WeNckx5"
          target="_blank"
          rel="nofollow"
          className="hover:text-primary-100"
        >
          <address className="text-base mb-4 not-italic">
            Suite 26 / 53 Vernon Tce, Teneriffe, QLD 4005
          </address>
        </a>
        <p className="text-base">Open Monday - Friday, 9am - 5pm</p>
      </Container>
    </Section>
  </Layout>
);

export default ContactUs;
