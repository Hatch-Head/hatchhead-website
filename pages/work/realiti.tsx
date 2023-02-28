import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../../components/layout";
import Head from "next/head";
import Tags from "../../components/Tags";
import CaseStudiesHeader from "../../components/case-studies/caseStudiesHeader";
import IsometicHero from "../../components/case-studies/irealiti/isometric";
import BuildUI from "../../components/case-studies/irealiti/buildUI";
import Image from "next/image";
import Mockup from "../../assets/img/realiti-ipad-mockups.png";

import Widgets from "../../components/case-studies/irealiti/widgets";
import { Player } from "@lottiefiles/react-lottie-player";

import SearchAnim from "../../assets/animations/realiti-search.json";
import useIsInViewport from "../../hooks/isInViewport";
const styleTint =
  ".bg-primary, .prose h1:before { background-color: #F09436 !important};";

export default function HomePage() {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const searchInViewport = useIsInViewport(searchRef);

  return (
    <AnimatePresence>
      <Layout>
        <>
          <Head>
            <meta name="description" content="iSimulate Realiti360 design" />
          </Head>

          <motion.div layoutId="Realiti">
            <CaseStudiesHeader
              heading="Realiti"
              subHeading="Clinical education made easy on any screen"
              //video="/vid/realiti360.mp4"
            />
          </motion.div>
          <style type="text/css">{styleTint}</style>

          <div className="w-full relative pt-40">
            <div className="container px-6 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
              <div className="md:basis-1/2 mb-24">
                <table>
                  <tbody>
                    <tr>
                      <th>Client:</th>
                      <td>iSimulate</td>
                    </tr>
                    <tr>
                      <th>Year:</th>
                      <td>2021</td>
                    </tr>
                    <tr>
                      <th>Website:</th>
                      <td>
                        <a href="ISIMULATE.COM">ISIMULATE.COM</a>
                      </td>
                    </tr>
                    <tr>
                      <th>What we did:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Recognition:</th>
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

              <div className="md:basis-1/2 mb-24">
                <h2>
                  Redesign an iPad app for mobile and desktop environments
                </h2>
                <p>
                  Realti360 is a modular simulation ecosystem incorporating a
                  patient simulator, CPR feedback and video in a single system.
                </p>
                <p>
                  We were asked to help extend the app to desktop and mobile
                  devices to cater for new and growing features, environments
                  and clinician needs.
                </p>
              </div>
            </div>
          </div>

          <IsometicHero />

          <div className="w-full bg-gray-1000 relative py-40">
            <div className="container mx-auto px-6 sm:px-8 flex align-center flex-row prose-invert dark:prose-invert">
              <div className="md:basis-1/2">
                <h1>Small big bigger</h1>
                <h2>Rethinking the layout.</h2>
                <p className="text-white">
                  We rethought how a single-screen device could work across
                  different devices, from mobile to big desktop monitors.
                </p>
                <p>
                  Our result: The Grid - an extensible, module approach for each
                  widget to provide complete control - from handheld devices to
                  big desktops.
                </p>
              </div>
            </div>
            <div className="md:basis-1/2"></div>
          </div>

          {/* <TestimonialComponent
        author="Andrew Morton"
        role="Design Lead"
        quote="We had to incorporate into our thinking that the learning environment for clinicians is one where they have a small window of time to teach, in-between patients and rounds."
      /> */}

          <BuildUI />

          <div className="w-full bg-gray-50 dark:bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto md:grid md:grid-cols-12 gap-4 prose dark:prose-invert">
              <div className="col-start-1 md:col-span-7 justify-center">
                <h1>Widget Stats</h1>
                <h2>Rethinking the layout.</h2>
                <p>
                  We rethought how a single-screen device could work across
                  different devices, from mobile to big desktop monitors.
                </p>
                <p>
                  Our result: The Grid - an extensible, module approach for each
                  widget to provide complete control - from handheld devices to
                  big desktops.
                </p>
              </div>
              <div className="md:col-span-4">IMAGE GOES HERE</div>
            </div>
          </div>

          {/* <div className="hidden sm:block">sm</div>
      <div className="hidden md:block">md</div>
      <div className="hidden lg:block">lg</div>
      <div className="hidden xl:block">xl</div>
      <div className="hidden 2xl:block">2xl</div> */}

          <div className="w-full bg-gray-50 dark:bg-gray-1000 relative py-40">
            <div className="container px-6 mx-auto lg:grid md:grid-cols-12 gap-4 prose dark:prose-invert">
              <div className="col-start-1 lg:col-span-5 justify-center mb-24">
                <h1>It's me you're looking for</h1>
                <h2>
                  Getting the clinicians the widgets they need, instantly.
                </h2>
                <p>
                  There’s plenty of different ways to replicate a cardiac
                  scenario - but one great way
                </p>
              </div>
              <div className="lg:col-span-6 h-[570px]">
                <div ref={searchRef}>
                  {searchInViewport && (
                    <Player
                      autoplay
                      loop
                      src={require("../../assets/animations/realiti-search.json")}
                      style={{ maxWidth: "580px" }}
                    ></Player>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-50 dark:bg-gray-1000 relative py-40">
            <div className="container mx-auto px-6 sm:px-8 align-center prose dark:prose-invert">
              <div className="flex flex-row">
                <div className="md:basis-1/2">
                  <h1>Face lift off</h1>
                  <h2>Nipping and tucking the user interface</h2>
                  <p>
                    With new devices meant a new way of thinking about layout.
                    Our goal was to make it easier than ever to pickup and
                    quickly test a student or rehearse a difficult scenario
                    quickly.
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
