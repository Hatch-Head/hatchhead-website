import { Layout } from "../../components/layout";
import { Container } from "../../components/util/container";
import { Section } from "../../components/util/section";
import Row from "../../components/util/row";
import { HeroBanner } from "../../components/blocks/heroBanner";
import Image from "next/image";
import JobTable from "../../components/jobTable";
import Colors from "../../assets/img/work/cru-colors.svg";
import Assets from "../../assets/img/work/cru-assets.svg";

import Pills from "../../assets/img/work/cru-pills.svg";
import Buttons from "../../assets/img/work/cru-buttons.svg";
import Pickers from "../../assets/img/work/cru-pickers.svg";

const Cru = () => (
  <Layout>
    <HeroBanner
      headline="Cru software"
      text="Rostering & Scheduling solutions for the complex workforce"
    />

    <Section>
      <Container>
        <Row>
          <JobTable
            client="Cru Software"
            year={2022}
            website="https://crusoftware.com"
            tags={["UI Design", "Design Systems"]}
          />
          <div className="text-base">
            <p>
              How do developers and product designers create new features,
              without a designer? What colors can we use? How much padding
              should there be? What font sizes do we use?
            </p>
            <p>They turn to their Design System</p>
          </div>
        </Row>
      </Container>
    </Section>

    <div className="bg-[#5B6AC3] dark:bg-[#21274b] py-24">
      <Container>
        <div className="flex md:justify-end">
          <Pills className="w-full max-w-3xl" />
        </div>
      </Container>
      <Container>
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
      <Container>
        <div className="flex md:justify-end">
          <Buttons className="w-full max-w-3xl" />
        </div>
      </Container>
    </div>

    <div
      className="relative h-[50vh] w-full"
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
        <Row>
          <div className="prose dark:prose-invert">
            <h1>Brent the team??</h1>
            <h2>Coaching phase</h2>
            <p>
              The research phase for always took us through infinity circles.
              Exploring and conducting interviews with many dentists, nurses,
              and clinic managers helped us empathise and understand the
              difficutlies of keeping a clinic always on-track and ready for the
              next patient.
            </p>
          </div>
          <Image
            alt="The Hatch head team performing a workshop"
            src={require("../../assets/img/work/cru-workshop.png")}
            width={600}
            height={600}
            className="w-full"
          />
        </Row>
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
