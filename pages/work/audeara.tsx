import { Layout } from "../../components/layout";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Tags from "../../components/Tags";
import Image from "next/image";

import GDA from "../../assets/img/good-design-awards-winner-2022.png";
import Waveform from "../../assets/vid/audeara-website-banner.mp4";
import Phone from "../../components/blocks/phone";
import videoMp4 from "../../assets/vid/reel-short.mp4";
import WaveformWebM from "../../assets/vid/audeara-website-banner.webm";
import Testimonial from "../../components/blocks/testimonial";
import Alex from "../../assets/img/alex-afflix.png";
import HeroPhone from "../../assets/img/audeara-banner-hero.png";
import ScreensWithHeadphones from "../../assets/img/audeara-screens-with-headphones.png";
import Audiogram from "../../assets/img/audeara-working-audiograms.png";
import CardVideo1 from "../../assets/vid/audeara-card-audio-source.mp4";
import CardVideo2 from "../../assets/vid/audeara-card-power-cable.mp4";
import FadeUp from "../../components/transitions/FadeUp";

const Audeara = () => (
  <AnimatePresence>
    <Layout darkContent>
      <Head>
        <meta name="description" content="Audeara mobile app" />
      </Head>
      <header className="bg-black py-32 relative">
        <FadeUp>
          <div className="flex items-center justify-center mb-24 relative">
            <Image
              src={HeroPhone}
              width={366}
              height={738}
              className="z-10"
              alt="Screenshot of the Audeara app inside a phone"
            />
            <div className="flex absolute top-0 items-center justify-center grow h-full">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="animate-fadeIn z-0 w-full min-w-full max-w-none  object-center object-contain invisible md:visible"
              >
                <source src={Waveform} type="video/mp4;codecs=hvc1" />
                <source src={WaveformWebM} type="video/webm;" />
              </video>
            </div>
          </div>
        </FadeUp>

        <div className="relative container px-6 mx-auto z-30 max-w-6xl">
          <h1 className="text-3xl text-white font-bold mb-8">Audeara app</h1>
          <h1 className="text-2xl text-white mb-12">
            Scaling up into a new market
          </h1>
          <p className="text-xl text-white">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Etiam porta sem
            malesuada magna mollis euismod. Sed posuere consectetur est at
            lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros.
          </p>
        </div>
      </header>

      <section className="w-full relative pt-40 bg-white dark:bg-neutral-1000">
        <div className="container max-w-6xl px-6 md:space-x-8 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
          <div className="md:basis-1/3 mb-24">
            <div className="block mb-4">
              <h5 className="text-xs font-bold uppercase text-neutral-300">
                Client
              </h5>
              <a href="https://audeara.com/" target="_blank" rel="no-follow">
                Audeara
              </a>
            </div>

            <div className="block mb-6">
              <h5 className="text-xs font-bold uppercase text-neutral-300">
                Year
              </h5>
              2022
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
            <h2>Problem stuff</h2>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
              fringilla.
            </p>
            <p>
              Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Maecenas sed diam eget risus varius blandit sit amet non
              magna.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-10 md:py-24">
        <div className="container max-w-5xl px-6 mx-auto prose dark:prose-dark">
          <h1 className="text-xl font-bold">Opportunity</h1>
          <p>Audeara's technology is backed by</p>

          <p>
            Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec sed odio dui. Donec sed odio dui.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
            eget risus varius blandit sit amet non magna.
          </p>

          <Image
            src={Audiogram}
            width={1440}
            height={930}
            alt=""
            className="md:mt-24"
          />
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-1000 py-24">
        <div className="container px-6 mx-auto flex space-x-4">
          <FadeUp>
            <Image
              src={ScreensWithHeadphones}
              width={1440}
              height={930}
              alt=""
            />
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 bg-white dark:bg-neutral-1000">
        <div className="container px-6 mx-auto prose"></div>
        <div className="container px-6 mx-auto md:flex space-x-4  space-y-20 max-w-4xl">
          <div className="flex md:basis-1/2">
            <div className="justify-center">
              <div className="sticky top-36">
                <FadeUp>
                  <Phone className="max-w-[366px]">
                    <video
                      className="bg-primary"
                      autoPlay
                      muted
                      playsInline
                      loop
                      src={videoMp4}
                    ></video>
                  </Phone>
                </FadeUp>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:basis-1/2 items-center space-y-20">
            <FadeUp>
              <video
                src={CardVideo1}
                width={390}
                height={467}
                className="w-fill rounded-xl shadow-lg border border-gray-50 dark:border-0"
                autoPlay
                muted
                playsInline
                loop
              />
            </FadeUp>

            <FadeUp>
              <video
                src={CardVideo2}
                width={390}
                height={467}
                className="w-fill rounded-xl shadow-lg border border-gray-50 dark:border-0"
                autoPlay
                muted
                playsInline
                loop
              />
            </FadeUp>
            <FadeUp>
              <video
                src={CardVideo1}
                width={390}
                height={467}
                className="w-fill rounded-xl shadow-lg border border-gray-50 dark:border-0"
                autoPlay
                muted
                playsInline
                loop
              />
            </FadeUp>
          </div>
        </div>
      </section>

      <Testimonial
        className="py-24 bg-white dark:bg-black"
        name="Alex"
        role="CTO"
        quote="As a large language model, I am delighted to pen down my journey with Hatch Head. Collaborating with this dynamic team to conceptualise and design their business has been nothing short of an inspiring journey, filled with bursts of creativity, innovation, and mutual growth."
        image={Alex}
      />
    </Layout>
  </AnimatePresence>
);

export default Audeara;
