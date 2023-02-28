import { Layout } from "../components/layout";
import { Section } from "../components/util/section";
import { Container } from "../components/util/container";
import { HeroBanner } from "../components/blocks/heroBanner";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { Parallax } from "react-scroll-parallax";
import ContactForm from "../components/forms/contactForm";
import Row from "../components/util/row";

import Image1 from "../assets/img/black-3d-66.png";
import Image2 from "../assets/img/black-3d-39.png";
import Image3 from "../assets/img/black-3d-72.png";
import Image4 from "../assets/img/black-3d-46.png";

const ContentBlock = ({
  preHeading,
  heading,
  subHeading,
  children,
}: {
  preHeading: string;
  heading: string;
  subHeading?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col md:w-1/2">
    <h1 className=" text-neutral-500 mb-4 text-sm">{preHeading}</h1>
    <h2 className="font-display text-2xl mb-8 text-neutral dark:text-white">
      {heading}
    </h2>
    {subHeading && (
      <h3 className="text-lg mb-4 dark:text-neutral-200">{subHeading}</h3>
    )}
    <div className="prose-base  text-neutral-800 dark:text-gray-300">
      {children}
    </div>
  </div>
);

const Asset = ({ image }: { image: StaticImageData }) => {
  // const speed = useMemo(() => (breakpoint === "mobile" ? 0 : 30), [breakpoint]);
  // console.log(speed, breakpoint);
  return (
    <div className="flex items-center justify-center h-[500px] grow">
      <Parallax speed={30} className="mt-[-300px]">
        <Image
          src={image}
          alt="Dots"
          width={400}
          height={400}
          className="mb-[-500px]"
        />
      </Parallax>
    </div>
  );
};

const AboutYou = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Find out if you need a digital product design agency"
        />
      </Head>

      <HeroBanner
        size="medium"
        headline="Hey, nice to know you."
        tagline="About you"
        text="We're deeply involved with our clients. That's why it's important to us that we know you, as well as you know us. And we don't just work with anyone. Instead, we're ideal for a few situations that we've outlined below.

"
      />
      <Section color="transparent">
        <Container size="small">
          <Row>
            <ContentBlock
              preHeading={'The "Design later" problem'}
              heading="You built something, but it needs some design love."
              subHeading="Your engineers threw something together, but they're not designers. And that's okay."
            >
              <p>
                So you and your team have developed and shipped your MVP and by
                God, it's working! Your small user base 'get it' and while it's
                not perfect, it's showing promise.{" "}
              </p>
              <p className="text-muted">
                However, after a few months of adding features and patching
                things, the placeholder UI isn't really cutting it anymore. The
                layout is breaking apart and only adding new features will make
                it worse. And hey, you've got big plans - new features to grow
                your users that take you to the next level.
              </p>
              <p className="text-muted">
                <span className="dark:text-gold text-primary">
                  You don't need a UX person full-time
                </span>
                , of course, it's a bit too premature for that - but you know
                that you need someone to come in and work with your team to help
                make things flow better, be easier to use, and generally nicer
                to use. Heck, this may help get you to the next growth
                milestone.{" "}
              </p>
            </ContentBlock>

            <Asset image={Image1} />
          </Row>
        </Container>
      </Section>
      <Section color="transparent">
        <Container size="small">
          <Row reverse>
            <ContentBlock
              preHeading={'The "Where do I start?" problem.'}
              heading="You see an opportunity, but what now?"
            >
              <p>
                Launching a new digital product or service is challenging.
                There's a ton of decisions to be made regarding the design, the
                marketing, branding, getting users and growing. If you don't
                know where to begin that's okay, because that's what we can do
                for you.
              </p>
              <p>
                We'll start with a bit of background research and a strategy
                session to figure out the next moves, what the problem space is
                you're trying to fill, how best to get customers, as well as the
                shape of your minimum viable product.
              </p>
            </ContentBlock>
            <Asset image={Image2} />
          </Row>
        </Container>
      </Section>

      <Section color="transparent">
        <Container size="large">
          <Row>
            <ContentBlock
              preHeading={'The "Need a UX Designer yesterday" problem.'}
              heading="You need some UX Design to keep moving forward"
            >
              <p>
                Growing isn't without its pains, and that's where you're at
                right now. You've got more feature requests, user feedback
                issues, and unknowns then you know what do with. You need some
                assistance to unclog the uncertainty and keep the development
                team moving. Hiring someone in-house full time for this seems
                like overkill. No, this is a probelm that's only going to get
                worse the longer you leave it.
              </p>
              <p>
                Fortunately, we're here to help to unclog the the feedback and
                get things back on track. Hatch Head is available for
                short-sprints, suitable for tight timeframes and agile
                environments.
              </p>
            </ContentBlock>
            <Asset image={Image3} />
          </Row>
        </Container>
      </Section>

      <Section color="transparent">
        <Container size="large">
          <Row reverse>
            <ContentBlock
              preHeading={'The "questions without answers" problem.'}
              heading="You know users have a problem, you're just not sure what it is."
            >
              <p>
                Users are signing up, but they're not staying. You're unsure why
                and you're leaving a lot of revenue on the table. It seems like
                you've got more uncertainty and unknowns then you know what to
                do with.
              </p>
              <p>
                We can assist with straightening out and digging into the
                reasons why and coming up with a solution. You may not need us
                for the long term, and that's okay, because we're all about
                making a powerful, sharp impact.
              </p>
            </ContentBlock>
            <Asset image={Image4} />
          </Row>
        </Container>
      </Section>

      <Section>
        <ContactForm />
      </Section>
    </Layout>
  );
};
export default AboutYou;
