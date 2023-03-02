import { Layout } from "../components/layout";
import { Section } from "../components/util/section";
import { Container } from "../components/util/container";
import Row from "../components/util/row";
import { HeroBanner } from "../components/blocks/heroBanner";
import Image from "next/image";
import Head from "next/head";
import { Parallax } from "react-scroll-parallax";
import FeatureList from "../components/blocks/featureList";

import DotsFloating from "../assets/img/process-phase1-particles.png";
import DotsCube from "../assets/img/process-phase2-particle-cube.png";
import DotsSingle from "../assets/img/process-phase3-circle.png";
import DotsOrbit from "../assets/img/process-phase3-circle-orbit.png";

import SectionHeading from "../components/blocks/sectionHeading";
import ContactForm from "../components/forms/contactForm";

import WhatWeDoCards from "../components/blocks/whatWeDo";
const WhatWeDo = () => (
  <Layout>
    <Head>
      <meta name="description" content="Hatch Head process" />
    </Head>

    <HeroBanner
      size="small"
      headline="Designing for better"
      tagline="What we do"
      text="We design experiences that enhance and increase user retention and growth. "
    />

    <Section>
      <SectionHeading
        title="Solutions"
        content="We use our skills to solve problems of all sizes, whether it's launching from the ground up or improving a product"
      />

      <Container>
        <WhatWeDoCards />
      </Container>
    </Section>

    <Section>
      <SectionHeading
        title="Capabilities"
        content="Building and designing better product experiences your customers will love"
      />
      <Container>
        <FeatureList
          items={[
            {
              label: "UI Design",
              href: "/what-we-do/ui-design",
            },
            {
              label: "Ux Design",
              href: "/what-we-do/ux-design",
            },
            {
              label: "Research",
              href: "/what-we-do/ux-research",
            },
            {
              label: "Product Strategy",
              href: "/what-we-do/product-strategy",
            },
          ]}
        />
      </Container>
    </Section>

    <Section>
      <Container size="large">
        <Row>
          <h1 className="text-3xl font-bold text-neutral mb-48">Our process</h1>
        </Row>

        <Row>
          <div className="lg:w-7/12 mb-24 prose dark:prose-invert">
            <Parallax speed={30}>
              <Image
                src={DotsFloating}
                alt="Dots"
                width={930}
                height={930}
                //className="mt-[300px] mb-"
              />
            </Parallax>
          </div>

          <div className="lg:w-5/12 mb-24 prose dark:prose-invert">
            <h1>Define</h1>
            <div>
              <p>
                Define is the process of taking what we know from our Discover
                stage and sorting it into a clear identity of our users and the
                problems they have.
              </p>
              <p>
                Expect assumptions to be validated, new ideas inserted and old
                ideas discarded. We should now be clear on what the problem is
                and who the people impacted are likely to be.
              </p>
              <h4>Some thing we do at this stage</h4>
              <Row>
                <ul className="list-style-arrow md:w-1/2">
                  <li>User Research</li>
                  <li>Desktop Research</li>
                  <li>Competitor Analysis</li>
                  <li>Field Studies</li>
                </ul>
                <ul className="list-style-arrow md:w-1/2">
                  <li>User Journey Mapping</li>
                  <li>User Personas</li>
                  <li>Empathy Mapping</li>
                  <li>Service Blueprints</li>
                </ul>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </Section>

    <Section>
      <Container size="large">
        <Row>
          <div className="lg:w-1/2 mb-24 prose dark:prose-invert">
            <h1>Ideate</h1>
            <div className="prose dark:prose-invert">
              <p>
                Ideate is the process of taking what we know from our Discover
                stage and sorting it into a clear identity of our users and the
                problems they have.
              </p>
              <p>
                Expect assumptions to be validated, new ideas inserted and old
                ideas discarded. We should now be clear on what the problem is
                and who the people impacted are likely to be.
              </p>
              <h4>Some thing we do at this stage</h4>
              <Row>
                <ul className="list-style-arrow md:w-1/2">
                  <li>Empathy Mapping</li>
                  <li>Empathy Mapping</li>
                  <li>Service Blueprints</li>
                </ul>
              </Row>
            </div>
          </div>

          <div className="lg:w-1/2 mb-24 prose dark:prose-invert justify-center flex relative">
            <Parallax speed={30}>
              <Image
                src={DotsCube}
                alt="Dots"
                width={1400}
                height={1400}
                className="md:scale-150 md:translate-x-[20rem]"
              />
            </Parallax>
          </div>
        </Row>
      </Container>
    </Section>

    <Section>
      <Container size="large">
        <Row reverse>
          <div className="lg:w-1/2 mb-24 prose dark:prose-invert">
            <h1>Solution</h1>
            <div className="prose dark:prose-invert">
              <p>
                The solution phase is like a big loop that goes something like
                this:
              </p>
              <div className="bg-white p-4 rounded-sm mb-4">
                Design &#8594; Test &#8594; Evaluate &#8594; Repeat
              </div>
              <p>
                Each iteration, the 'solution' becomes clearer. The outcome more
                defined. The bad ideas are disgarded and the good ideas are
                kept.
              </p>
              <h4>Some thing we do at this stage</h4>
              <Row>
                <ul className="list-style-arrow md:w-1/2">
                  <li>Wireframes</li>
                  <li>Usability Testing</li>
                  <li>Prototyping</li>
                  <li>Service Blueprints</li>
                </ul>
              </Row>
            </div>
          </div>

          <div className="lg:w-1/2 mb-24 prose dark:prose-invert justify-center flex">
            <Parallax speed={30}>
              <Image
                src={DotsSingle}
                alt="Dots"
                width={930}
                height={930}
                className="md:scale-150 md:translate-x-[-20rem]"
              />
            </Parallax>
          </div>
        </Row>
      </Container>
    </Section>

    <Section>
      <Container size="large">
        <Row>
          <div className="lg:w-1/2 mb-24 prose dark:prose-invert">
            <h1>Deliver & Orbit</h1>
            <div className="prose dark:prose-invert">
              <p>
                The Deliver stage is the completion of our designs and the
                handing over to the engineers and developers.
              </p>
              <p>
                We provide instructions on how we want the final product to work
                to the engineering team or partners.
              </p>
              <p>
                However, we don't just throw designs over the fence and move on.
                Instead, we stay in orbit with engineering and product team,
                helping the team bring the designs into production.
              </p>

              <h3>Some thing we do at this stage</h3>
              <ul className="list-style-arrow">
                <li>Documentation</li>
                <li>Developer handover briefs</li>
                <li>User Flows</li>
                <li>Designs</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 mb-24 md:mb-0 prose justify-center flex">
            <Parallax speed={30}>
              <Image src={DotsOrbit} alt="Dots" width={930} height={930} />
            </Parallax>
          </div>
        </Row>
      </Container>
    </Section>

    <Section>
      <div
        className="relative h-[50vh] w-full"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <div className="fixed h-full w-full left-0 top-0">
          <Image
            src={require("../assets/img/hatch-head-team-02.png")}
            alt="The hatch head team working at a desk around a laptop"
            width={1200}
            height={1200}
            className="w-full"
          />
        </div>
      </div>
    </Section>

    <Section>
      <ContactForm />
    </Section>
  </Layout>
);

export default WhatWeDo;
