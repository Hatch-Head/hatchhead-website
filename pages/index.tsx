import Head from "next/head";

import { Layout } from "../components/layout";
import { HeroBanner } from "../components/blocks/heroBanner";
import videoMp4 from "../assets/vid/reel-short.mp4";
import videoWebM from "../assets/vid/reel-short.webm";
import { Clients } from "../components/blocks/clients";
import Title from "../components/title";
import { Section } from "../components/util/section";
import { Container } from "../components/util/container";
import Work from "../components/blocks/work";
import WhatWeDoCards from "../components/blocks/whatWeDo";
import ContactForm from "../components/forms/contactForm";
import Testimonials from "../components/blocks/testimonials";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hatch Head - Software products and services</title>
        <meta
          name="description"
          content="Great digital experiences happens by design."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner
        sectionProps={{ offsetTop: false }}
        headline="We solve complex problems through digital product and service design."
        text={
          "We craft interfaces and user experiences that inspire trust & delight"
        }
        // TODO: We're for companies that have dev, but no design. Something like : We partner with in-house dev teams to deliver designs that work within your needs.
        video={[videoMp4, videoWebM]}
        image={{ src: "/img/reel-poster.png" }}
        size="full"
        //containerProps={{ size: "full" }}
      />

      <Clients />

      <div className="container relative py-12 w-full">
        <h1 className="text-2xl md:text-3xl text-neutral dark:text-neutral-0 font-bold mb-4">
          Projects
        </h1>
        <p className="text-base md:text-lg md:max-w-2xl dark:text-gray-400">
          Some of our key projects
        </p>
      </div>

      <Work />

      <hr />

      <Section>
        <Container>
          <Title title="What we do" className="mb-12" element="h2" />
          <WhatWeDoCards className="mb-24" />
        </Container>
      </Section>

      <hr />

      {/* 
      <div className="bg-black bg-no-repeat bg-center bg-[url('/img/black-abstract-bg.png')] bg-cover text-white py-24 mb-48">
        <Container width="medium" className=" text-white text-center">
          <h1 className="text-lg md:text-2xl font-bold text-center mb-8">
            We provide the design behind our clients success
          </h1>
          <p className="text-center text-base md:text-lg text-neutral-400">
            We are designing for businesses, big or small so they can achieve
            whatever they aim to achieve.
          </p>
        </Container>
      </div> */}
      <Testimonials />
      <Section>
        <ContactForm />
      </Section>
    </Layout>
  );
}
