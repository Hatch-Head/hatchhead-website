import React from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Layout } from "../../components/layout";
import Head from "next/head";
import Tags from "../../components/Tags";
import CaseStudiesHeader from "../../components/case-studies/caseStudiesHeader";
import IsometicHero from "../../components/case-studies/irealiti/isometric";
import BuildUI from "../../components/case-studies/irealiti/buildUI";
import Image from "next/image";
import Mockup from "../../assets/img/realiti-ipad-mockups.png";
import WidgetLayout from "../../assets/img/work/realiti-widget-layout.svg";

export default function HomePage() {
  const { scrollY } = useScroll();

  return (
    <AnimatePresence>
      <Layout>
        <>
          <Head>
            <meta name="description" content="iSimulate REALITi design" />
          </Head>
          <motion.div layoutId="Realiti">
            <CaseStudiesHeader
              heading="REALITi"
              subHeading="Clinical education made easy on any screen"
              //video="/vid/realiti360.mp4"
            />
          </motion.div>
          <div className="w-full relative pt-40">
            <div className="container px-6 space-x-8 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
              <div className="md:basis-1/3 mb-24">
                <div className="block mb-4">
                  <h5 className="text-xs font-bold uppercase text-neutral-300">
                    Client
                  </h5>
                  <a
                    href="https://www.isimulate.com/"
                    target="_blank"
                    rel="no-follow"
                  >
                    iSimulate
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
                  <Tags center={false} tags={["UI Design", "UX Design"]} />
                </div>

                <div className="block mb-6">
                  <h5 className="text-xs font-bold uppercase text-neutral-300">
                    Awards
                  </h5>
                  TODO: Get GDA logo and link to site
                </div>
              </div>

              <div className="md:basis-2/3 mb-24">
                <h2>
                  Redesign an iPad app for mobile and desktop environments
                </h2>
                <p>
                  Realti360 is a modular simulation ecosystem incorporating a
                  patient simulator, CPR feedback and video in a single system.
                  The iPad app is deployed within hospitals across shared
                  devices to facilitate staff training during adhoc periods of
                  downtime.
                </p>
                <p>
                  After much success in the market, the original layout and
                  information architecture had become a bottleneck for new
                  features.
                </p>
                <p>
                  Hatch Head was ask to rethink the architecture of the app to
                  give the product team the space to develop new features.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto md:grid md:grid-cols-12 gap-4 prose prose-invert items-center">
              <div className="col-start-1 md:col-span-6 justify-center">
                <h1>Rethinking the layout</h1>
                <h2>Back to square one</h2>
                <p>
                  Deployed on shared devices meant that the UI needed to feel
                  familiar and consistent while allowing the clinicians to
                  customize for different training scenarios.
                </p>
                <p>
                  The solution was to create a widget system where controls
                  could be repositioned and resized to suit the user's needs.
                </p>
              </div>
              <div className="col-start-1 md:col-span-6 justify-center">
                <WidgetLayout alt="Abstract graphic showing how the widget layout was considered" />
              </div>
            </div>
          </div>
          {/* <TestimonialComponent
        author="Andrew Morton"
        role="Design Lead"
        quote="We had to incorporate into our thinking that the learning environment for clinicians is one where they have a small window of time to teach, in-between patients and rounds."
      /> */}

          <BuildUI />
          <div className="w-full bg-gray-50 dark:bg-gray-1000 relative pt-20 pb-24">
            <div className="container px-6 mx-auto md:grid md:grid-cols-12 gap-24 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-6 justify-center">
                <h1>The widget</h1>
                <h2>A new pattern to future proof the interface</h2>
                <p>
                  Each parameter control was re-imagined into widget. While each
                  control is unique, resizing and configuring is consistent
                  across all widgets allowing for a familiar user experience
                  across a complex ecosystem of controls.
                </p>
              </div>
              <div className="md:col-span-6 items-center justify-center flex">
                <video autoPlay muted playsInline loop>
                  <source
                    src="/vid/widget-elements.mov"
                    type="video/quicktime"
                  />
                  <source src="/vid/widget-elements.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
          <motion.div
            style={{ transform: scrollY }}
            className="bg-[url('/img/realiti-widget-gallery.svg')] bg-contain repeat-x h-[700px]"
          />
          <IsometicHero />
          {/* <div className="hidden sm:block">sm</div>
      <div className="hidden md:block">md</div>
      <div className="hidden lg:block">lg</div>
      <div className="hidden xl:block">xl</div>
      <div className="hidden 2xl:block">2xl</div> */}
          <div className="w-full bg-gray-50 dark:bg-gray-1000 relative pt-60 pb-40">
            <div className="container mx-auto lg:grid md:grid-cols-12 gap-24 prose dark:prose-invert">
              <div className="col-start-1 lg:col-span-6 justify-center mb-24">
                <h1>It's me you're looking for</h1>
                <h2>
                  Getting the clinicians the widgets they need, instantly.
                </h2>
                <p>
                  What good are all these widgets if you can't find what you're
                  looking for. The widget library with re-organized with search
                  features added, allowing clinicians to quickly find and
                  configure the widgets they need.
                </p>
              </div>
              <div className="lg:col-span-6 h-[570px]">
                <video autoPlay muted playsInline loop className="w-full">
                  <source
                    src="/vid/irealiti-search.mov"
                    type="video/quicktime"
                  />
                  <source src="/vid/irealiti-search.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-50 dark:bg-gray-1000 relative pt-20 py-40">
            <div className="container mx-auto px-6 sm:px-8 align-center prose dark:prose-invert">
              <div className="flex flex-row">
                <div className="md:basis-1/2">
                  <h1>Face lift off</h1>
                  <h2>Nipping and tucking the user interface</h2>
                  <p>
                    A re-look at typography, colors and spacing gave the user
                    interface a more modern look and feel, making this software
                    stand out from other medical training software.
                  </p>
                </div>
              </div>
              <Image
                src={Mockup}
                alt="iPads showing various screens of the Realiti 360 software"
              />
            </div>
          </div>
        </>
      </Layout>
    </AnimatePresence>
  );
}
