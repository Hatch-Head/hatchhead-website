import { Layout } from "../components/layout";
import { Section } from "../components/util/section";
import { Container } from "../components/util/container";
import { HeroBanner } from "../components/blocks/heroBanner";
import Row from "../components/util/row";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import SectionHeading from "../components/blocks/sectionHeading";
import TeamHero from "../assets/img/hatch-head-team-together.jpg";
import Team from "../assets/img/hatch-head-team-01.png";
import Logo from "../assets/img/logo.svg";

import Andrew from "../assets/img/profile-andrew-morton.png";
import Brent from "../assets/img/profile-brent-wallace.png";
import Natalia from "../assets/img/profile-natalia-chamon-kovalenko.png";

import NoHeros from "../assets/img/black-3d-84.png";
import Why from "../assets/img/black-3d-61.png";
import AllWork from "../assets/img/black-3d-83.png";
import BeyondBrief from "../assets/img/black-3d-5.png";

import ContactForm from "../components/forms/contactForm";

type StaffCardProps = {
  name: string;
  role: string;
  src: string | StaticImageData;
};

const StaffCard = ({ name, role, src }: StaffCardProps) => (
  <div className="md:w-1/3 mb-12">
    <Image
      src={src}
      width={396}
      height={590}
      alt={name}
      className="w-full mb-4"
    />
    <h3 className="font-bold text-base text-neutral dark:text-neutral-0 mb-2">
      {name}
    </h3>
    <p className="text-neutral-700">{role}</p>
  </div>
);

type ValuesProps = {
  title: string;
  content: string;
  src: string | StaticImageData;
  alt: string;
};

const ValueCard = ({ title, content, alt, src }: ValuesProps) => (
  <div className="md:w-1/2 shrink-0 grow mb-12 text-center bg-white dark:bg-neutral-900 rounded-sm p-8 md:p-12 items-center flex-col flex">
    <h3 className="font-bold text-base text-neutral mb-2 dark:text-white">
      {title}
    </h3>
    <p className="text-neutral-600 mb-8 dark:text-neutral-300 whitespace-pre-line">
      {content}
    </p>
    <Image
      src={src}
      width={180}
      height={180}
      alt={alt}
      className="darks:mix-blend-difference"
    />
  </div>
);

const AboutUs = () => (
  <Layout>
    <Head>
      <meta name="description" content="Learn more about Hatch Head" />
    </Head>

    <HeroBanner
      headline="Who are we?"
      tagline="About us"
      text="Introducing ourselves"
    />

    <Section>
      <Container>
        <Row>
          <div className="md:w-1/2 justify-center prose dark:prose-invert  flex flex-col">
            <p className="text-md pb-5">
              Hatch Head started as an idea. What if there was a product design
              agency that was design-led but had three decades of engineering
              experience behind it?
            </p>

            <p className="text-md pb-5">
              The thinking being that design and engineering, when working
              together, can change how people experience the world.
            </p>

            <p className="text-md pb-5">
              We took a chance. And in 2021, this idea become a reality when
              Hatch Head opened its doors. In just 18 months, Hatch Head was
              recognized internationally and at home for our design work, for
              brands both big and small, local & international.
            </p>

            <p className="text-md">
              The heart of a designer with the head of an engineer. That's Hatch
              Head.
            </p>
            <div className="mb-20"></div>
            <Logo width={120} />
          </div>
          <div className="md:w-1/2">
            <Image
              src={TeamHero}
              width={500}
              height={500}
              alt="The Hatch Head team working around a table"
              className="w-full"
            />
          </div>
        </Row>
      </Container>
    </Section>

    <Section>
      <SectionHeading
        title="The Team"
        content="The people behind your success"
      />

      <Container>
        <Row>
          <StaffCard
            name="Andrew Morton"
            role="Director, Design director"
            src={Andrew}
          />

          <StaffCard
            name="Brent Wallace"
            role="Director, Product strategy"
            src={Brent}
          />

          <StaffCard
            name="Natalia Chamon Kovalenko"
            role="Product designer"
            src={Natalia}
          />
        </Row>
      </Container>
    </Section>

    <Section>
      <SectionHeading
        title="Our core values"
        content="These are the things that drive everything we do at Hatch Head"
      />

      <Container>
        <div className="md:flex md:space-x-12 items-stretch">
          <ValueCard
            title="There are no heroes"
            content={`We collaborate with each other and our clients. \nWe welcome healthy debate`}
            alt="Abstract 3D render representing a group of people"
            src={NoHeros}
          />
          <ValueCard
            title="Understand the WHY?"
            content={`We are deliberate in what we do, we have conviction in\nour decisions while open to being persuaded. \nIf we don’t know the why, we find it.`}
            alt="Abstract 3D render representing understanding"
            src={Why}
          />
        </div>
        <div className="md:flex md:space-x-12 items-stretch">
          <ValueCard
            title="It’s all in the work"
            content={`There is a difference between doing the work and doing good work. \nWe don’t become complacent, and we deliver high quality always.`}
            alt="Abstract 3D render representing a caring about the work"
            src={AllWork}
          />
          <ValueCard
            title="Go beyond the brief"
            content={`We are the ones that go the extra mile to be great, not just good. \nWe know a B is not the same as an A.`}
            alt="Abstract 3D render representing going above and beyond"
            src={BeyondBrief}
          />
        </div>
      </Container>
    </Section>

    <Section className="items-center justify-center text-center pb-24 md:pb-40">
      <Container>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral dark:text-neutral-0 mb-8">
          Mission
        </h1>
        <p className="text-base md:text-lg mb-4">
          To provide the design behind our clients' success.
        </p>
        <p>
          We use design and technology to help businesses be market-leaders,
          moving faster, and delivering more value.
        </p>
      </Container>
    </Section>

    <div className="md:h-[600px]" style={{ clipPath: "inset(0)" }}>
      <div className="md:absolute z-10">
        <Image
          src={Team}
          quality={100}
          width={1200}
          height={800}
          alt="The hatch head team working around a table"
          className="position md:fixed top-0 w-full md:h-screen bg-black md:object-cover"
        />
      </div>
    </div>

    <Section>
      <ContactForm />
    </Section>
  </Layout>
);

export default AboutUs;
