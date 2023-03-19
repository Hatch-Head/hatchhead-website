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

    <div
      className="relative h-[75vh] w-full"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="fixed h-screen w-screen left-0 top-0">
        <Container>
          <Colors />
        </Container>
      </div>
    </div>

    <div className="bg-[#5B6AC3] dark:bg-[#21274b] py-24">
      <Container width={"medium"}>
        <div className="flex md:justify-end">
          <Pills className="w-full max-w-3xl" />
        </div>
      </Container>
      <Container width={"medium"}>
        <Row>
          <div className="prose dark:prose-invert text-white">
            <h1 className="text-white">Something better</h1>
            <h2 className="text-white">Rethinking the system.</h2>
            <p>
              We rethought how a single-screen device could work across
              different devices, from mobile to big desktop monitors.
            </p>
            <p>
              Our result: The Grid - an extensible, module approach for each
              widget to provide complete control - from handheld devices to big
              desktops.
            </p>
          </div>
          <Pickers className="w-full" />
        </Row>
      </Container>
      <Container width={"medium"}>
        <div className="flex md:justify-end">
          <Buttons className="w-full max-w-3xl" />
        </div>
      </Container>
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
