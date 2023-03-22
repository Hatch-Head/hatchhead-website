import { Layout } from "../../components/layout";
import { Container } from "../../components/util/container";
import { Section } from "../../components/util/section";
import { HeroBanner } from "../../components/blocks/heroBanner";
import Image from "next/image";
import Tags from "../../components/Tags";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

import Colors from "../../assets/img/work/cru-colors.svg";
import Assets from "../../assets/img/work/cru-assets.svg";

import Audit from "../../assets/img/work/cru-audit.png";
import ButtonsChange from "../../assets/img/work/cru-buttons.png";
import ColorDefinitions from "../../assets/img/work/cru-colors.png";

const Cru = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    setBodyClass(isInView ? "bg-neutral-900 dark:bg-black" : "");
  }, [isInView]);

  return (
    <Layout>
      <div className={`${bodyClass} transition-colors duration-500`}>
        <HeroBanner
          headline="Cru Software"
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
              <h2>Scale design in an engineering lead team</h2>
              <p>
                Cru software is a rostering system for large scale workforces
              </p>
              <p>
                While pivoting to a SAS model, the product team were tasked with
                improving the UI across the platform to make it easier to use as
                well as consistent across features.
              </p>
              <p>
                Hatch Head decided that the most effective way to achieve this
                in a team without any designers was to create a design system so
                that the developer and product teams had a consistent set of
                rules to apply to any feature designs.
              </p>
            </div>
          </div>
        </section>

        <Container size={"small"}>
          <h1 className="text-3xl font-bold text-center mb-8 dark:text-white mt-40">
            Building a design system
          </h1>
          <p className="text-center text-lg dark:text-neutral-200">
            Part designer, part engineer, what does it take to create a design
            system?
          </p>
        </Container>

        <section className="w-full pt-40 pb-12 lg:pb-[200px]">
          <div className="container px-6 lg:space-x-24 mx-auto lg:flex flex-row prose dark:prose-dark">
            <div className="lg:sticky top-[25vh] lg:h-[50vh]  lg:w-1/2 justify-center items-center">
              <Image
                width={400}
                height={400}
                src={Audit}
                alt="A collection of the original elements that were audited"
                className="w-full max-h-full"
              />
            </div>
            <div className="py-12 lg:py-0 lg:h-[100vh] flex flex-col lg:w-1/2 pt-40">
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
        <section className="w-full pb-0">
          <div className="container px-6 lg:space-x-24 mx-auto lg:flex flex-row prose dark:prose-dark">
            <div className="lg:sticky top-[40px] lg:h-[100vh] lg:w-1/2 items-center flex justify-center">
              <Image
                width={720}
                height={1450}
                src={ColorDefinitions}
                alt="A collection of the original elements that were audited "
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="lg:h-[200vh] py-12 lg:py-0 justify-center flex flex-col lg:w-1/2 prose-invert text-white">
              <h1 ref={ref}>2. Define the naming conventions</h1>
              <h2>A shared language between all element and team members</h2>
              <p>
                We then consolidated, grouped and named the colours and shades.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 lg:pb-[300px]">
          <div className="container px-6 lg:space-x-24 mx-auto lg:flex flex-row prose dark:prose-dark">
            <div className="lg:sticky lg:top-[40px] lg:h-[100vh] lg:w-1/2 items-center flex justify-center">
              <Image
                width={530}
                height={530}
                src={ButtonsChange}
                alt="A collection of the original elements that were audited "
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="lg:h-[150vh] lg:py-0 py-12 pt-50 flex flex-col lg:w-1/2 justify-center">
              <h1>3. Bring it all together</h1>
              <h2>Using the rules to create new elements</h2>
              <p>
                We then take what we have learned from the previous steps to
                create the new elements.
              </p>
              <p>
                The result is a set of rules and UI kit that when used, reduces
              </p>
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
                  Rolling out the Design System to product and development teams
                  is a critical step in the process.
                </h2>
                <p>
                  A design system is a shared language between all teams. Hatch
                  Head facilitated multiple workshops across the various teams
                  to ensure that the system was understood and adopted.
                </p>
                <p>
                  We also collaborated with the development team to create the{" "}
                  <a
                    href="https://storybook.js.org/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Storybook
                  </a>{" "}
                  component library to make sure that the developer experience
                  was seamless when using the design system.
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
      </div>
    </Layout>
  );
};
export default Cru;
