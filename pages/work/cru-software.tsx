import { Layout } from "../../components/layout";
import { Container } from "../../components/util/container";
import { Section } from "../../components/util/section";
import Row from "../../components/util/row";
import { HeroBanner } from "../../components/blocks/heroBanner";
import Image from "next/image";
import JobTable from "../../components/jobTable";
import Tags from "../../components/Tags";

import Colors from "../../assets/img/work/cru-colors.svg";
import Assets from "../../assets/img/work/cru-assets.svg";
import Pills from "../../assets/img/work/cru-pills.svg";
import Buttons from "../../assets/img/work/cru-buttons.svg";
import Pickers from "../../assets/img/work/cru-pickers.svg";

import Audit from "../../assets/img/work/cru-audit.png";
import ButtonsChange from "../../assets/img/work/cru-buttons.png";
import ColorDefinitions from "../../assets/img/work/cru-colors.png";

const Cru = () => (
  <Layout>
    <HeroBanner
      headline="Cru software"
      text="Creating a Design System to bring features to market faster"
    />

    <section className="w-full relative pt-40">
      <div className="container px-6 lg:space-x-8 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
        <div className="md:basis-1/3 mb-24">
          <div className="block mb-4">
            <h5 className="text-xs font-bold uppercase text-neutral-300">
              Client
            </h5>
            <a
              href="https://www.crusoftware.com/"
              target="_blank"
              rel="no-follow"
            >
              Cru Software
            </a>
          </div>

          <div className="block mb-6">
            <h5 className="text-xs font-bold uppercase text-neutral-300">
              Year
            </h5>
            2021
          </div>

          <div className="block mb-6">
            <h5 className="text-xs font-bold uppercase text-neutral-300">
              Services
            </h5>
            <Tags center={false} tags={["UI Design", "Design System"]} />
          </div>
        </div>

        <div className="md:basis-2/3 mb-24">
          <h2>Redesign an iPad app for mobile and desktop environments</h2>
          <p>
            Realti360 is a modular simulation ecosystem incorporating a patient
            simulator, CPR feedback and video in a single system. The iPad app
            is deployed within hospitals across shared devices to facilitate
            staff training during adhoc periods of downtime.
          </p>
          <p>
            After much success in the market, the original layout and
            information architecture had become a bottleneck for new features.
          </p>
          <p>
            Hatch Head was ask to rethink the architecture of the app to give
            the product team the space to develop new features.
          </p>
        </div>
      </div>
    </section>

    <section className="w-full pt-40 pb-[200px]">
      <div className="container px-6 lg:space-x-24 mx-auto lg:flex flex-row prose dark:prose-dark">
        <div className="md:sticky top-[25vh] md:h-[50vh]  md:w-1/2 justify-center items-center">
          <Image
            width={400}
            height={400}
            src={Audit}
            alt="A collection of the original elements that were audited"
            className="w-full"
          />
        </div>
        <div className=" grow-0 md:h-[100vh] flex flex-col lg:w-1/2 pt-40">
          <h1>Where do we start?</h1>
          <h2>We find out where we are</h2>
          <p>
            When creating a design system, we first took an audit of all the
            colors, elements and typography currently used within the the
            platform.
          </p>
          <p>
            This helps us find redundant or repeated elements, inconsistent
            color and typography styles and existing ui patterns that can be
            repurposed into the new design system.
          </p>
        </div>
      </div>
    </section>
    <section className="w-full pb-80">
      <div className="container px-6 lg:space-x-24 mx-auto lg:flex flex-row prose dark:prose-dark">
        <div className="md:sticky top-[5vh] md:h-[100vh] md:w-1/2 items-center">
          <Image
            width={400}
            height={400}
            src={ColorDefinitions}
            alt="A collection of the original elements that were audited "
            className="w-full"
          />
        </div>
        <div className=" grow-0 md:h-[200vh] justify-center flex flex-col lg:w-1/2">
          <h1>2. Define the naming conventions</h1>
          <h2>A shared language between all element and team members</h2>
          <p>From there we start to find the repeatable</p>
        </div>
      </div>
    </section>
    <section className="w-full pb-[300px]">
      <div className="container px-6 lg:space-x-24 mx-auto lg:flex flex-row prose dark:prose-dark">
        <div className="md:sticky top-[200px] md:h-[800px] md:w-1/2 ">
          <Image
            width={530}
            height={530}
            src={ButtonsChange}
            alt="A collection of the original elements that were audited "
            className="w-full"
          />
        </div>
        <div className=" grow-0 md:h-[150vh] pt-50 flex flex-col lg:w-1/2 justify-center">
          <h1>3. Consolidate</h1>
          <h2>Find out where we are</h2>
          <p>From there we start to find the </p>
        </div>
      </div>
    </section>

    <div
      className="relative h-[75vh] w-full bg-white dark:bg-neutral-1000"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="fixed h-screen w-screen left-0 top-0">
        <Container>
          <Colors />
        </Container>
      </div>
    </div>

    <Section>
      <Container>
        <div className="container px-6 lg:space-x-24 mx-auto lg:flex align-center flex-row prose dark:prose-dark items-center">
          <div className="prose dark:prose-invert lg:w-1/2">
            <h1>Bridging the gap between teams</h1>
            <h2>
              Rolling out the Design System to product and development teams is
              a critical step in the process.
            </h2>
            <p>
              A design system is a shared language between all teams. Hatch Head
              facilitated multiple workshops across the various teams to ensure
              that the system was understood and adopted.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              alt="The Hatch head team performing a workshop"
              src={require("../../assets/img/work/cru-workshop.png")}
              width={600}
              height={500}
            />
          </div>
        </div>
      </Container>
    </Section>

    <Section>
      <Container>
        <Assets />
      </Container>
    </Section>
  </Layout>
);
export default Cru;
