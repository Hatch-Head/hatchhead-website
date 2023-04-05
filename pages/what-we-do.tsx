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
      headline="What we do"
      //tagline="What we do"
      text="Partnering with businesses & brands to design great product experiences. "
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
        content="Solving problems with a key services"
      />
      <Container>
        <FeatureList
          items={[
            {
              label: "UI Design",
              //href: "/what-we-do/ui-design",
            },
            {
              label: "UX Design",
              //href: "/what-we-do/ux-design",
            },
            {
              label: "Research",
              //href: "/what-we-do/ux-research",
            },
            {
              label: "Product Strategy",
              //href: "/what-we-do/product-strategy",
            },
          ]}
        />
      </Container>
    </Section>

    <Section>
      <Container size="large">
        <h2 className="text-3xl font-bold text-neutral dark:text-white mb-48">
          Our process
        </h2>

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

            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-4">
              <p className="subtitle">Step 1</p>Define
            </h3>
            <div>
              <p>To begin the problem-solving process, we first need to understand what, exactly, the problem really is. </p>

              <p>We do this like things like talking to users, doing research, observing people while they work, reviewing analytical data and doing things like surveys. </p>

              <p>We then take all our hours of research and interviews and boil them down into finding patterns to draw our insights from. </p>

              <p>By the end, we have a clearer picture of what the problem(s) really are. Armed, then, with the solid information, we are in the best possible position to create the ideal solution.</p>


              <h4 className="font-bold text-base">
                Some things we do and produce during this step:
              </h4>
              <div className=" flex">
                <ul className="list-style-disc ">
                  <li>User Research to gather data on users' needs, motivations, and pain points.</li>
                  <li>Desktop Research to gain insights from existing sources.</li>
                  <li>Competitor Analysis to identify opportunities for differentiation.</li>
                  <li>Field Studies to observe users in their natural environment.</li>
                  <li>User Journey Maps to identify pain points and areas for improvement.</li>
                  <li>User Personas to ensure the product meets the needs of the target audience.</li>
                  <li>Service Blueprints to visualise the customer journey and improve the customer experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Section>

    <Section
      className="overflow-x-hidden overflow-y-hidden"
      color="transparent">
      <Container size="large">
        <Row>
          <div className="lg:w-1/2 mb-24 prose dark:prose-invert">
            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-4">
              <p className="subtitle">Step 2</p> Ideate
            </h3>
            <div className="prose dark:prose-invert">
              <p>
                From our 'define' stage, we now have a much better shape of the problem. Now we can start looking at solving it with what we call 'ideation'.
              </p>
              <p>
                There's never just a single way to solve a problem. That's why we dedicate time to getting all the ideas out in front of us and see what works and what doesn't. We want to bring in all our informatioin we know about the problem as it'll reflect what we want to solve. We'll do sketches, talk through ideas and come up with potential solutions that we can quickly try out.
              </p>
              <p>The result is that we have a concept, with some rough shape, that solves our problem.</p>
              <h4 className="font-bold text-base">
                Some things we do and produce during this step:
              </h4>
              <div className=" flex">
                <ul className="list-style-disc ">
                  <li>Sketches</li>
                  <li>Prototypes</li>
                  <li>Brainstorming exercises</li>

                </ul>
              </div>
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

    <Section className="overflow-visible" color="transparent">
      <Container size="large">
        <Row reverse>
          <div className="lg:w-1/2 mb-24 prose dark:prose-invert">
            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-4">
              <p className="subtitle">Step 3</p>Solution
            </h3>
            <div className="prose dark:prose-invert">
              <p>
                Every project has a solution - an outcome that can be used. Typically, these come in the form of designs that get shared with engineers and developers.
              </p>
              <p>Here we work very closely with in-house engineering teams, agencies or the greater team to produce the appropriate documentation and visual designs. </p>

              <h4 className="font-bold text-base">
                Some things we do and produce during this step:
              </h4>
              <div>
                <ul className="list-style-disc">
                  <li>Wire frames help in the beginning to give better shape and guideanec to layout and navigation.</li>
                  <li>Usability test helps us understand if the user interface will run into any challenges when being used in the field</li>
                  <li>UI designs that are commonly shown as visuals - describing the style, colour, and detail of the design.</li>

                </ul>
              </div>
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

    <Section color="transparent">
      <Container size="large">
        <Row>
          <div className="lg:w-1/2 mb-24 prose dark:prose-invert">
            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-4">
              <p className="subtitle">Step 4</p>Deliver & Orbit
            </h3>
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
              <h4 className="font-bold text-base">
                Some things we do and produce during this step:
              </h4>
              <ul className="list-style-disc">
                <li>Documentation</li>
                <li>Developer handover briefs</li>
                <li>User Flows</li>

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
  </Layout >
);

export default WhatWeDo;
