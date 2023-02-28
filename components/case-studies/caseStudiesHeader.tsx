import { motion } from "framer-motion";
import AnimatedCharacters from "../transitions/AnimatedText";
type Props = {
  video?: string;
  heroImg?: string;
  tint?: string;
  heading?: string;
  subHeading?: string;
};

const CaseStudiesHeader = ({
  video,
  heroImg,
  tint,
  heading,
  subHeading,
}: Props) => (
  <motion.div
    layout
    className={`h-full relative bg-cover bg-center bg-no-repeat flex items-center`}
    style={{
      height: 520,
      //backgroundImage: `url(${heroImg})`,
      //backgroundColor: tint || "transparent",
    }}
  >
    {video && (
      <div className="animate-fadeIn fixed l-0 t-0">
        <video
          playsInline
          autoPlay
          muted
          loop
          src={video}
          style={{ top: 0 }}
          className="fixed opacity-30 z-0 w-auto min-w-full min-h-full max-w-none l-0 t-0"
        />
      </div>
    )}

    <div className="content z-10  align-center flex flex-col justify-center mx-auto container px-12">
      {heading && (
        <AnimatedCharacters
          text={heading}
          tag="h1"
          className="font-display md:text-3xl text-2xl mb-6"
        />
      )}
      {subHeading && (
        <AnimatedCharacters
          text={subHeading}
          tag="h2"
          className="font-display text-xl"
        />
      )}
    </div>
  </motion.div>
);

export default CaseStudiesHeader;
