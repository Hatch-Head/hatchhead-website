import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../../components/layout";
import Head from "next/head";
import Tags from "../../components/Tags";
import CaseStudiesHeader from "../../components/case-studies/caseStudiesHeader";

import Image from "next/image";
import Hero from "../../assets/img/always/always-hero-isometric.png";
import AlwaysServiceDesign from "../../assets/img/always/always-service-design.svg";
import AlwaysLogoEvolution from "../../assets/img/always/always-logo-evolution.svg";
import BradFeelsAsset from "../../assets/img/always/always-brand-feel.svg";
import { Parallax } from "react-scroll-parallax";
import useIsInViewport from "../../hooks/isInViewport";
import { Container } from "../../components/util/container";
const styleTint =
  ".bg-primary, .prose h1:before { background-color: #3143A1 !important};";

export default function HomePage() {
  const searchRef = useRef<HTMLDivElement | undefined>(undefined);
  //const searchInViewport = useIsInViewport(searchRef);

  return (
    <AnimatePresence>
      <Layout>
        <>
          <Head>
            <meta name="description" content="iSimulate Realiti360 design" />
          </Head>

          <motion.div layoutId="Always">
            <CaseStudiesHeader
              heading="always"
              subHeading="Your clinic’s essentials delivered to your door"
              //video="/vid/realiti360.mp4"
            />
          </motion.div>
          <style type="text/css">{styleTint}</style>

          <div className="w-full relative pt-40 ">
            <div className="container px-6 mx-auto lg:flex align-center space-x-12 flex-row prose dark:prose-dark">
              <div className="md:basis-1/2 mb-24">
                <table className="text-sm not-prone">
                  <tbody>
                    <tr className="not-prose">
                      <th>Client:</th>
                      <td>Always</td>
                    </tr>
                    <tr>
                      <th>Year:</th>
                      <td>2021</td>
                    </tr>
                    <tr>
                      <th>Website:</th>
                      <td>
                        <a
                          href="https://thealways.co"
                          referrerPolicy="no-referrer"
                          target="_blanks"
                        >
                          THEALWAYS.CO
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th>What we did:</th>
                      <td>
                        <Tags
                          center={false}
                          tags={["UI Design", "UX Design"]}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="md:basis-1/2 pb-24">
                <h2>
                  Creating something new. A service tailored for all dental
                  clinic needs
                </h2>
                <p>
                  Always is a subscription service that delivers an Always box
                  which contains everything you need to keep your clinic
                  on-track.
                </p>
                <p>
                  We were asked to help create the app to desktop and mobile
                  devices to cater for new and growing features, environments
                  and clinician needs.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative h-[100vh] w-full"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <div className="fixed h-screen w-screen left-0 top-0">
              <Image
                src={Hero}
                alt="The hatch head team working at a desk around a laptop"
                width={1200}
                height={1200}
                className="w-[200%]"
              />
            </div>
          </div>

          {/* <div className="w-full  aspect-[4/3] overflow-visible md:-mb-[800px] md:-mt-[300px] ">
            <Image
              src={Hero}
              alt="The always website in isometric view"
              className="w-[200%] md:w-[200%] max-w-none"
            />
          </div> */}

          <div className="w-full bg-white  dark:bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto md:grid md:grid-cols-12 gap-4 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-7 justify-center">
                <h1>Building blocks</h1>
                <h2>Research phase</h2>
                <p>
                  The research phase for always took us through infinity
                  circles. Exploring and conducting interviews with many
                  dentists, nurses, and clinic managers helped us empathize and
                  understand the difficulties of keeping a clinic always
                  on-track and ready for the next patient.
                </p>
                <p>
                  We took in all the crucial problems that clinics face with
                  when constantly re-ordering dental disposables and focused on
                  making something that works for any clinic.
                </p>
              </div>
              <div className="md:col-span-4">IMAGE GOES HERE</div>
            </div>
          </div>

          <div className="w-full dark:bg-gray-1000 relative py-48 bg-white lg:bg-[url('/img/always/always-brand-feel.svg')] bg-no-repeat bg-center bg-[length:1500px_900px] bg-y-">
            <div className="container px-6 mx-auto lg:grid md:grid-cols-2 gap-4 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-1 justify-center">
                <h1>The brand feels</h1>
                <h2>Building an identity.</h2>
                <p>
                  Laying the groundwork for the Always brand was our initial
                  step.
                </p>
                <p>
                  Enthusiastic, bright hues, a graceful yet formal typeface,
                  with a respectful but approachable voice, and a hint of
                  playfulness.
                </p>
              </div>

              <BradFeelsAsset />
            </div>
          </div>

          <div className="w-full  dark:bg-gray-1000 relative py-40 bg-white">
            <div className="container px-6 mx-auto md:grid md:grid-cols-2 gap-12 prose dark:prose-invert">
              <div className="justify-center row-span-1 md:order-last mb-12">
                <h1>Always there on time</h1>
                <h2>Logo design</h2>
                <p>
                  Laying the groundwork for the Always brand was our initial
                  step.
                </p>
                <p>
                  The word "always" can be used in many ways. We purposefully
                  used a small box at the end, serving as a subtle nod to the
                  Always box you always receive on time, always reliable and
                  always there to keep your clinic on-track.
                </p>
              </div>
              <div className="row-span-1 justify-center items-center flex">
                <div className="md:relative w-full h-full ">
                  <AlwaysLogoEvolution className="md:absolute right-20 -top-[25%] md:w-[200%] w-[100%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto md:grid md:grid-cols-2 gap-8 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-1 justify-center">
                <h1>Something tailored for you.</h1>
                <h2>
                  Making sure Dental clinics receive what they always need
                </h2>
                <p>
                  No point on wasting things you don’t need - the Hatch Head
                  design team made a survey that customises your order for your
                  clinic.
                </p>
              </div>
              <div className="md:col-span-1 justify-center items-center flex">
                <Image
                  width={450}
                  height={390}
                  alt="screenshot of the always onboarding"
                  src={require("../../assets/img/work/always-onboarding.png")}
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto md:grid md:grid-cols-2 gap-4 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-1 justify-center">
                <h1>Service design</h1>
                <h2>Customer order flow</h2>
                <p>
                  We made a customer order flow for Always. We were tasked with
                  designing the customer experience from start to finish. The
                  goal was to create a seamless and intuitive experience that
                  would make it easy for customers to find the right product and
                  place an order.
                </p>
              </div>
              <div className="md:col-span-1 justify-center items-center flex">
                IMAGE GOES HERE
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="container justify-center flex">
              <AlwaysServiceDesign className="w-full" />
            </div>
          </div>

          <div className="w-full bg-white dark:bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto md:grid md:grid-cols-2 gap-4 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-1 justify-center">
                <h1 className="not-prose">Strike a pose</h1>
                <h2>A place for design at the heart of Always</h2>
                <p>
                  With new devices meant a new way of thinking about layout. Our
                  goal was to make it easier than ever to pickup and quickly
                  test a student or rehearse a difficult scenario quickly.
                </p>
              </div>
              <div className="md:col-span-1 justify-center items-center flex">
                IMAGE GOES HERE
              </div>
            </div>
          </div>

          <div className="bg-[url('/img/always/always-phone-mockups.png')] bg-fixed w-full h-[900px] bg-no-repeat bg-cover" />

          <div className="w-full bg-white  py-40">
            <div className="container px-6 mx-auto prose dark:prose-invert">
              <h1>
                Anytime. Anywhere.
                <br />
                Always there.
              </h1>
            </div>
            <Container>
              <div className="flex flex-col md:flex-row space-x-4 ">
                <Parallax speed={30}>
                  <Image
                    src={require("../../assets/img/work/always-screenshot-4.png")}
                    alt="Screenshot of the always story page"
                    width={600}
                    height={800}
                    className="w-full mb-24 shadow-lg"
                  />
                  <Image
                    src={require("../../assets/img/work/always-screenshot-3.png")}
                    alt="Screenshot of the always how it works page"
                    width={600}
                    height={800}
                    className="w-full shadow-lg"
                  />
                </Parallax>
                <Parallax speed={-10}>
                  <Image
                    src={require("../../assets/img/work/always-screenshot-1.png")}
                    alt="An image of the always price table on a laptop screen"
                    width={600}
                    height={800}
                    className="w-full shadow-lg mb-24 mt-24"
                  />
                  <Image
                    src={require("../../assets/img/work/always-screenshot-2.png")}
                    alt="Screenshot of the always website showing the product nitrile gloves"
                    width={600}
                    height={800}
                    className="w-full shadow-lg"
                  />
                </Parallax>
              </div>
            </Container>
          </div>
        </>
      </Layout>
    </AnimatePresence>
  );
}
