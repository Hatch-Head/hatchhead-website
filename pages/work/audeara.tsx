import { Layout } from "../../components/layout";
import { motion, AnimatePresence, useScroll } from "framer-motion";
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

const Audeara = () => (
  <AnimatePresence>
    <Layout darkContent>
      <Head>
        <meta name="description" content="Audeara mobile app" />
      </Head>
      <header className="bg-black py-32 relative">
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
              className="animate-fadeIn z-0 w-full min-w-full max-w-none  object-center object-contain"
            >
              <source src={Waveform} type="video/mp4;codecs=hvc1" />
              <source src={WaveformWebM} type="video/webm;" />
            </video>
          </div>
        </div>
        <div className="relative container px-6 mx-auto z-30 max-w-6xl">
          <h1 className="text-3xl text-white font-bold mb-8">Audeara app</h1>
          <h1 className="text-2xl text-white mb-12">
            Subheading that’s really catchy
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
        <div className="container max-w-6xl px-6 space-x-8 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
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

      <section className="bg-neutral-10 py-24">
        <div className="container max-w-5xl px-6 mx-auto prose dark:prose-dark">
          <h1 className="text-xl font-bold">Opportunity stuff</h1>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.
            Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>

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
            className="mt-24"
          />
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-1000 py-24">
        <div className="container px-6 mx-auto flex space-x-4">
          <Image src={ScreensWithHeadphones} width={1440} height={930} alt="" />
        </div>
      </section>

      <section className="pb-24 bg-white dark:bg-neutral-1000">
        <div className="container px-6 mx-auto prose"></div>
        <div className="container px-6 mx-auto flex space-x-4 max-w-4xl">
          <div className="flex md:basis-1/2 justify-center">
            <Phone className="max-w-sm sticky top-24">
              <video
                className="bg-primary"
                autoPlay
                muted
                playsInline
                src={videoMp4}
              ></video>
            </Phone>
          </div>
          <div className="flex flex-col md:basis-1/2 items-center space-y-8">
            <Image
              src="https://placehold.co/400x400"
              width={400}
              height={400}
            />

            <Image
              src="https://placehold.co/400x400"
              width={400}
              height={400}
            />

            <Image
              src="https://placehold.co/400x400"
              width={400}
              height={400}
            />
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
