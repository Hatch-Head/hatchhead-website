import { Layout } from "../../components/layout";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Tags from "../../components/Tags";
import Image from "next/image";

import GDA from "../../assets/img/good-design-awards-winner-2022.png";
import Testimonial from "../../components/blocks/testimonial";
import Alex from "../../assets/img/alex-afflix.png";
import FadeUp from "../../components/transitions/FadeUp";
import AlwaysLogoSquare from "../../assets/img/always-logo-square.svg";
import AlwaysShort from "../../assets/img/always-tshirt.png";
import AlwaysCheckout from "../../assets/img/always-checkout.png";
import AlwaysCups from "../../assets/img/always-cups.png";
import AlwaysEjectors from "../../assets/img/always-ejectors.png";
import AlwaysIpad from "../../assets/img/always-ipad.png";
import AlwaysMockup from "../../assets/img/always-mockup.png";
import AlwaysBox from "../../assets/img/always-box.png";

import OGTags from "../../components/blocks/ogTags";
const Audeara = () => (
  <AnimatePresence>
    <Layout darkContent>
      <Head>
        <meta name="description" content="Audeara mobile app" />
      </Head>
      <OGTags
        description="Looking into"
        title="Hatch Heads Always case study"
        image="/img/og-always.png"
      />

      <header className="bg-[#3143A1] py-32 min-h-[820px] justify-center flex">
        <div className="container px-6 mx-auto z-30 max-w-6xl justify-center flex flex-col">
          <h1 className="text-3xl text-white font-bold mb-8">Always</h1>
          <h1 className="text-2xl text-white mb-12">
            A dental’s essentials delivered to your door
          </h1>
        </div>
      </header>

      <section className="w-full relative pt-40 bg-white dark:bg-neutral-1000">
        <div className="container max-w-6xl px-6 md:space-x-8 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
          <div className="md:basis-1/3 mb-24">
            <div className="block mb-4">
              <h5 className="text-xs font-bold uppercase text-neutral-300">
                Client
              </h5>
              <a href="https://thealways.co" target="_blank" rel="no-follow">
                Always
              </a>
            </div>

            <div className="block mb-6">
              <h5 className="text-xs font-bold uppercase text-neutral-300">
                Year
              </h5>
              2023
            </div>

            <div className="block mb-6">
              <h5 className="text-xs font-bold uppercase text-neutral-300">
                Services
              </h5>
              <Tags center={false} tags={["UI Design", "UX Design"]} />
            </div>

            <div className="block mb-6">
              <h5 className="text-xs font-bold uppercase text-neutral-300 mb-0">
                Recognition
              </h5>
              <div className="flex space-x-4 wrap">
                <a
                  href="https://good-design.org/projects/realiti-control-ui-redesign/"
                  target="_blank"
                  rel="no-follow"
                  className="w-1/2"
                >
                  <Image
                    src={GDA}
                    alt="Good Design Awards Winner 2022"
                    width={200}
                    height={200}
                  />
                </a>
                <a
                  href="https://www.ux-design-awards.com/winners/realiti-360-control-benutzeroberflaeche"
                  className="w-1/2 text-neutral-900 dark:text-white"
                  target="_blank"
                  rel="no-follow"
                ></a>
              </div>
            </div>
          </div>

          <div className="md:basis-2/3 mb-24">
            <h2>
              Creating something new. A service tailored for all dental clinic
              needs
            </h2>
            <p>
              Always is a subscription service that delivers an Always box which
              contains everything you need to keep your clinic on-track.
            </p>
            <p>
              We were asked to help create the app to desktop and mobile devices
              to cater for new and growing features, environments and clinician
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container md:grid grid-cols-12 gap-24 items-center max-w-5xl">
          <Image
            src="https://placehold.co/640x640"
            width={640}
            height={640}
            alt=""
            className="md:col-span-5 w-full"
          />
          <AlwaysLogoSquare className="md:col-span-6  w-full block" />
        </div>
      </section>

      <section className="bg-white py-24 text-base">
        <div className="container max-w-5xl">
          <h1 className="text-xl font-bold ">The Challenge</h1>
          <h2 className="text-2xl font-bold max-w-3xl mb-8">
            If time is money, then how much is disposable?
          </h2>
          <p className="mb-8">
            After conducting thorough research across various dental clinics, we
            found that it typically takes up to 16 steps, equating to roughly 4
            hours each week, to order and replenish disposable supplies at a
            clinic.
          </p>
          <p>
            Our aim was to streamline this process with Always, reducing the
            process to four steps and essentially eliminating the need to
            constantly reorder stock. Our approach not only offers convenience
            but also simplifies operations for dental clinics and their staff.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container flex space-x-24 items-center max-w-5xl">
          <FadeUp>
            <AlwaysLogoSquare />
          </FadeUp>

          <FadeUp>
            <Image
              src={AlwaysShort}
              width={740}
              height={640}
              alt=""
              className="w-full grow"
            />
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container max-w-5xl md:grid grid-cols-2 gap-32">
          <div>
            <div className="sticky top-32 justify-center items-center flex">
              <FadeUp>
                <Image src={AlwaysCheckout} width={694} alt="Always checkout" />
              </FadeUp>
            </div>
          </div>

          <div className="space-y-24">
            <FadeUp>
              <Image
                src={AlwaysCups}
                width={640}
                height={640}
                alt=""
                className="w-full"
              />
            </FadeUp>
            <FadeUp>
              <Image
                src={AlwaysEjectors}
                width={640}
                height={640}
                alt=""
                className="w-full"
              />
            </FadeUp>{" "}
            <FadeUp>
              <Image
                src={AlwaysCups}
                width={640}
                height={640}
                alt=""
                className="w-full"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container max-w-7xl">
          <FadeUp>
            <Image
              src={AlwaysMockup}
              width={1215}
              height={734}
              alt="Always website within 2 iPads"
              className="w-full"
            />
          </FadeUp>
        </div>
        <div className="container md:flex max-w-7xl md:space-x-12 md:space-y-0 space-y-6 py-12">
          <FadeUp>
            <Image
              src={AlwaysIpad}
              width={495}
              height={495}
              alt="Always website in an iPad "
              className="md:basis-5/12 w-full"
            />
          </FadeUp>
          <FadeUp stagger={1}>
            <Image
              src={AlwaysBox}
              width={619}
              height={495}
              alt="Always website within 2 iPads"
              className="md:basis-6/12 w-full"
            />
          </FadeUp>
        </div>
      </div>

      <Testimonial
        className="py-24 bg-white dark:bg-black"
        name="Lok Tsang"
        role="CEO"
        quote={
          <>
            <p className="mb-4">It all started with a problem to solve.</p>

            <p className="mb-4">
              It has been exceptional working with Brent and Andrew from Hatch
              Head. They bring a wealth of experience and creativity to the
              table. They were able to bring creative solutions to problems by
              keeping open minds and unique perspectives throughout the process.
              Their professionalism throughout the journey allowed prompt
              delivery of product.
            </p>

            <p className="mb-4">
              I feel very fortunate to have been able to work with Hatch Head
              and our time together has culminated in winning two Good Design
              Awards, gold and best in class 2023. This is a testament to their
              hard work and talent.
            </p>

            <p>I look forward to working with the team again!</p>
          </>
        }
        image={Alex}
      />
    </Layout>
  </AnimatePresence>
);

export default Audeara;
