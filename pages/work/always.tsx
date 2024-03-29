import { Layout } from "../../components/layout";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Tags from "../../components/Tags";
import Image from "next/image";

import GDA from "../../assets/img/good-design-awards-best-in-class-2023.svg";
import Testimonial from "../../components/blocks/testimonial";
import LokTsang from "../../assets/img/always/lok-tsang.jpeg";
import FadeUp from "../../components/transitions/FadeUp";
import AlwaysLogoSquare from "../../assets/img/always-logo-square.svg";
import AlwaysShirt from "../../assets/img/always-tshirt.png";
import AlwaysCheckout from "../../assets/img/always-checkout.png";
import AlwaysCups from "../../assets/img/always-cups.png";
import AlwaysHighEjectors from "../../assets/img/always/high-volume-evacuator.png";
import AlwaysEjectors from "../../assets/img/always-ejectors.png";
import AlwaysIpad from "../../assets/img/always-ipad.png";
import AlwaysBox from "../../assets/img/always-box.png";
import AlwaysDualIPadMockup from "../../assets/img/always/always-dual-ipad-mockup.png";
import AlwaysItems from "../../assets/img/always/always-items.png";
import Rive, {
  Layout as RiveLayout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";
import Process from "../../assets/animations/always-process.riv";
import OGTags from "../../components/blocks/ogTags";
const Always = () => (
  <AnimatePresence>
    <Layout darkContent>
      <Head>
        <meta name="description" content="Always - Dental Disruptor" />
      </Head>
      <OGTags
        description="Always is a subscription service that delivers an Always box which contains everything you need to keep your clinic on-track. Hatch Head were asked to help create the app to desktop and mobile devices to cater for new and growing features, environments and clinician needs."
        title="Hatch Heads Always case study"
        image="/img/always-social.png"
      />
      <header className="bg-[#3143A1] py-32 min-h-[820px] justify-center flex">
        <div className="container px-6 mx-auto z-30 max-w-6xl justify-center flex flex-col">
          <h1 className="text-3xl text-white font-bold mb-8">Always</h1>
          <h1 className="text-2xl text-white mb-12">
            The essential dental clinic needs bundled and delivered monthly.
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
              <Tags
                center={false}
                tags={[
                  "Product Strategy",
                  "Service Design",
                  "UI Design",
                  "Delivery",
                  "UX",
                ]}
              />
            </div>

            <div className="block mb-6">
              <h5 className="text-xs font-bold uppercase text-neutral-300 mb-0">
                Recognition
              </h5>
              <div className="flex space-x-4 wrap">
                <a
                  href="https://good-design.org/projects/always-a-disruptor-to-dental-ordering/"
                  target="_blank"
                  rel="no-follow"
                  className="cursor-pointer"
                >
                  <GDA
                    alt="Good Design Awards Winner 2023"
                    width={200}
                    className="dark:fill-white cursor-pointer"
                  />
                </a>
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
      <section className="bg-white dark:bg-neutral-1000">
        <div className="container md:flex max-w-7xl md:space-x-12 md:space-y-0 space-y-6 py-12  items-center justify-center">
          <FadeUp>
            <AlwaysLogoSquare height={495} width={495} className="grow " />
          </FadeUp>
        </div>
      </section>
      <section className="bg-white dark:bg-neutral-1000 pt-24 pb-12 text-base dark:text-white">
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

      <div className="bg-white dark:bg-neutral-1000">
        <div className="container max-w-5xl">
          <Rive
            src={Process}
            className="w-full block  aspect-video"
            layout={
              new RiveLayout({
                fit: Fit.Contain,
                alignment: Alignment.TopCenter,
              })
            }
            width={500}
            height={300}
          />
        </div>
      </div>
      <section className="flex py-64 items-center justify-center bg-[#FFBCBC]">
        <div className="container max-w-8xl">
          <Image
            src={AlwaysItems}
            width={1201}
            height={387}
            alt="Selection of always products"
            className="w-full"
          />
        </div>
      </section>
      <Testimonial
        className="py-24 bg-white dark:bg-neutral-1000"
        name="Lok Tsang"
        role="Founder"
        quote="It has been exceptional working with Brent and Andrew from Hatch
        Head. They bring a wealth of experience and creativity to the
        table. They were able to bring creative solutions to problems by
        keeping open minds and unique perspectives throughout the process.
        Their professionalism throughout the journey allowed prompt
        delivery of product."
        image={LokTsang}
      />
      <section className="bg-white dark:bg-neutral-1000 py-32">
        <div className="container md:grid md:grid-cols-2 space-x-24 items-center max-w-5xl">
          <div>
            <FadeUp>
              <AlwaysLogoSquare
                height={380}
                width={380}
                className="block w-full "
              />
            </FadeUp>
          </div>
          <div>
            <FadeUp>
              <Image
                src={AlwaysShirt}
                width={495}
                height={495}
                alt=""
                className="w-full  block"
              />
            </FadeUp>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-neutral-1000 py-24">
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
                src={AlwaysEjectors}
                width={640}
                height={640}
                alt=""
                className="w-full"
              />
            </FadeUp>
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
                src={AlwaysHighEjectors}
                width={640}
                height={640}
                alt=""
                className="w-full"
              />
            </FadeUp>
          </div>
        </div>
      </section>
      <div className="bg-white dark:bg-neutral-1000">
        <div className="container max-w-7xl">
          <FadeUp>
            <Image
              src={AlwaysDualIPadMockup}
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
    </Layout>
  </AnimatePresence>
);

export default Always;
