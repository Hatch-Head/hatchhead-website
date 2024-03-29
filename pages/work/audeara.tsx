import { Layout } from "../../components/layout";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Tags from "../../components/Tags";
import Image from "next/image";

import GDA from "../../assets/img/Good-Design-Award_Winner_RGB_BLK_Logo.png";
import Waveform from "../../assets/vid/audeara-website-banner.mp4";
import Phone from "../../components/blocks/phone";
import WaveformWebM from "../../assets/vid/audeara-website-banner.webm";
import Testimonial from "../../components/blocks/testimonial";
import Alex from "../../assets/img/alex-afflik.png";
import ScreensWithHeadphones from "../../assets/img/audeara-screens-with-headphones.png";
import Audiogram from "../../assets/img/audeara-working-audiograms.png";
import CardVideo1 from "../../assets/vid/audeara-card-audio-source.mp4";
import CardVideo2 from "../../assets/vid/audeara-card-power-cable.mp4";
import CardVideo3 from "../../assets/vid/audeara-card-audio-cable.mp4";
import HearingCheckVid from "../../assets/vid/audeara-hearing-check.mp4";
import ScreenPersonalisationVid from "../../assets/vid/audeara-screen-personalisation.mp4";
import FadeUp from "../../components/transitions/FadeUp";
import OGTags from "../../components/blocks/ogTags";

const Audeara = () => (
  <AnimatePresence>
    <Layout darkContent>
      <Head>
        <meta name="description" content="Audeara mobile app" />
      </Head>
      <OGTags
        title="Audeara mobile app"
        description="How Hatch Head helped Audeara deliver perfect sound with their mobile app"
        image="/img/audeara-social.png"
      />
      <header className="bg-black py-32 relative">
        <FadeUp>
          <div className="flex items-center justify-center mb-24 relative">
            <Phone className="max-w-[366px] z-10">
              <video
                className="bg-primary"
                autoPlay
                muted
                playsInline
                loop
                src={ScreenPersonalisationVid}
              ></video>
            </Phone>

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
          <div className="text-2xl only:md:text-3xl text-white font-bold mb-8">
            Now Hear This.
          </div>
          <h1 className="text-base md:text-xl text-white mb-12 ">
            Delivering perfect sound with Audeara's mobile app.
          </h1>

          <p className="text-base md:text-xl text-white mb-12">
            Audeara, a leader in hearing-health technology, create products that
            calibrate their audio devices to your hearing so you experience
            clearer, brighter sounds and offset damaged or poor hearing.
          </p>

          <p className="text-base md:text-xl text-white mb-12">
            Audeara pivoted away from the mainstream consumer-audio market and
            focused on hearing wellness. Those that were hard of hearing - a
            typical byproduct of getting older - we're now the ideal customers
            for Audeara's audio products.
          </p>
          <p className="text-base md:text-xl text-white">
            {" "}
            This new direction also meant a new visual identity. This sparked an
            overhaul of their flagship mobile app. For Hatch Head, our goal was
            to redesign the mobile app experience to make it as easy as possible to plug-in, get personalised and start hearing.
          </p>
        </div>
      </header>

      <section className="w-full relative pt-12 md:pt-40 bg-white dark:bg-neutral-1000">
        <div className="container max-w-6xl px-6 md:space-x-8 mx-auto lg:flex align-center flex-row prose dark:prose-dark">
          <div className="md:basis-1/3md:mb-24">
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
                  href="https://good-design.org/projects/audeara-mobile-companion/"
                  target="_blank"
                  rel="no-follow"
                  className="w-1/2"
                >
                  <Image
                    src={GDA}
                    alt="Good Design Awards Winner 2023"
                    width={495}
                    className="dark:fill-white cursor-pointer"
                  />
                </a>

              </div>
            </div>
          </div>

          <div className="md:basis-2/3 mb-24">
            <h2>The challenge</h2>
            <p>
              Working closely with the team, we recognised the need to
              reconfigure the design of every screen. This wasn't designed for
              audiophiles who appreciate intricate sliders and buttons. Quite
              the opposite. Users needed to be able to connect, calibrate, and
              start listening in under 2 minutes.
            </p>

            <p>
              The directive for the app was clear: emphasise simplicity. As a
              result of its evolution towards a broader consumer base, our
              challenge was to refocus its core purpose. This became an exercise
              in minimalism — fewer features, less confusion, and reduced time
              spent navigating. Accessibility was paramount; we needed larger
              fonts and improved colour contrast to ensure readability. Our
              labels had to be precise, descriptive, yet approachable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-10 md:py-24">
        <div className="container max-w-4xl px-6 mx-auto prose dark:prose-dark">
          <h1 className="text-xl font-bold">Opportunity</h1>
          <p>Clinical diagnosis is a difficult path to walk when it comes to audio devices. While the technology within Audeara is akin to a hearing-test, there's legal implications assoicated with saying 'this is your hearing'. We wanted to educate the user on their health. And while it wasn't the primary goal, we felt it was a great opportunity to let get an idea of their overall hearing health.</p>

          <p>
            Onboarding – the process of guiding users to that 'a-ha' moment –
            presented another challenge. Audeara's headphones perform
            brilliantly even without personalisation. However, they genuinely
            shine when tailored to an individual's hearing. We devoted
            significant time to streamlining the headphones, focusing on both
            the hardware and software, to ensure users received the best
            possible experience. considered integrating directly with audio
            clinics, pre-loading hearing calibrations sourced from audiograms,
            and deploying them straight into the headphones.
          </p>

          <h1 className="text-xl font-bold">From Open to On ASAP</h1>
          <p>
            At the core of the app is the calibration of the user's hearing to
            the headphones. A hearing test typically takes between 5 to 7
            minutes. While this might seem lengthy, the result is a highly
            accurate representation of one's hearing. The real 'a-ha' moment for
            users is the subsequent personalisation demo. Switching from the
            default profile to the personalised one can be a revelation.
            Suddenly, activities like listening to music, having conversations,
            and watching television become possible again. We sought to provide
            a variety of audio playback options, including support for Spotify
            and other external players.
          </p>

          <h1 className="text-xl font-bold">Hearing checks</h1>
          <p>
            Clinical diagnosis can create some complexity in how the user
            interprets their hearing. It's one thing to have boosted sound, and
            another entirely to see that your 7K range is hitting at -20DB.
            Although it wasn't our primary goal, we believed translating the
            state of the person's hearing offered a valuable opportunity get a
            better understanding of their overall hearing picture.
          </p>
          <p>
            We wanted to motivate users to re-assess their hearing every six
            months. This would ensure their headphones remained synchronised
            with any changes in their hearing capabilities. It may seem minor,
            but such adjustments can have significant long-term effects.
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
          <div className="flex md:basis-1/2 items-center justify-center">
            <div className="justify-center">
              <div className="sticky top-3">
                <FadeUp>
                  <Phone className="max-w-[366px]">
                    <video
                      className="bg-primary"
                      autoPlay
                      muted
                      playsInline
                      loop
                      src={HearingCheckVid}
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
                src={CardVideo3}
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
      <FadeUp>
        <Testimonial
          className="py-24"
          image={Alex}
          name="Alex Afflick"
          role="CTO"
          quote="Hatch Head complement our team's capability with their knowledge of
        digital design and user experience. It's a pleasure to have access to
        them, where they can jump in and work to deliver great outcomes."
        />
      </FadeUp>
    </Layout>
  </AnimatePresence>
);

export default Audeara;
