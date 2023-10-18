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
        <title>Hatch Head - We design software. </title>
        <meta
          name="description"
          content="We believe great digital experiences happen by design."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner
        sectionProps={{ offsetTop: false }}
        headline="Hatch Head is an award-winning UX design agency."
        text={
          "We make interfaces and user experiences for new and existing software products & services. "
        }
        // TODO: We're for companies that have dev, but no design. Something like : We partner with in-house dev teams to deliver designs that work within your needs.
        video={[videoMp4, videoWebM]}
        image={{ src: "/img/reel-poster.png" }}
        size="full"
      //containerProps={{ size: "full" }}
      />

      <Clients />

      <div className="container relative py-12 w-full">
        <div className="flex flex-col justify-center">
          <Title title="Work" />
        </div>

      </div>

      <Work />

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
      {/* <Testimonials />*/}

      <Section>
        <hr />
        <ContactForm />
      </Section>
    </Layout>
  );
}
