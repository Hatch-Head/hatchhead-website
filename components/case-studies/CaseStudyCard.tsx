import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Title from "../title";
import { FiChevronRight } from "react-icons/fi";
import FadeUp from "../transitions/FadeUp";
type ProjectCardProp = {
  to: string;
  image: {
    src: string | StaticImageData;
    alt?: string;
  };
  backdrop?: {
    src: string | StaticImageData;
    alt?: string;
  };
  tags?: string[];
  name: string;
  className?: string;
  subHeading?: string;
  reverse?: boolean;
  children?: React.ReactNode;
};

const CaseStudyCard = ({
  to,
  image,
  backdrop,
  tags = [],
  name,
  className = "",
  reverse,
  subHeading,
  children,
}: ProjectCardProp) => {
  const clx = {
    full: "md:w-full",
    third: "md:w-1/3",
    half: "md:w-1/2",
  };

  return (
    <motion.div
      layoutId={name}
      className={`lg:flex w-full m-0 overflow-hidden mb-12 md:mb-48 group ${className} ${
        !reverse ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div
        className={`flex w-full items-center justify-end border-0  border-neutral-1000  dark:border-neutral-700`}
      >
        <div
          className={`py-12 md:py-24 lg:p-12  w-full xl:max-w-[738px] lg:max-w-[500px]   ${
            reverse ? "2xl:pr-0 lg:pl-32 " : "2xl:pl-0"
          }`}
        >
          <Title title={name} offsetDot className="mb-8" />
          <div className="xl:text-base text-base mb-12 dark:text-neutral-300">
            {children}
          </div>

          <Link
            aria-label={`Read more about the ${name} project`}
            href={to}
            className="w-full font-bold text-primary-75 dark:text-gold-100 text-base flex  space-x-8"
          >
            <span>View this project</span> <FiChevronRight />
          </Link>
        </div>
      </div>

      <FadeUp className="w-full relative overflow-visible">
        <Link
          aria-label={`Read more about the ${name} project`}
          href={to}
          className="overflow-visible"
        >
          {backdrop && (
            <Image
              src={backdrop.src}
              fill
              className="w-full z-0  pointer-events-none l-0"
              alt={`${name} project thumbnail`}
            />
          )}
          <div className="z-10 grow h-full aspect-square relative transform-gpu group-hover:scale-105  xl:group-hover:scale-105 transition duration-300 ease-in-out pointer-events-none flex items-center justify-center">
            <Image
              src={image.src}
              width={900}
              height={900}
              alt={`${name} project thumbnail`}
              className="xl:max-w-[900px] w-full"
            />
          </div>

          <div className="w-full h-full flex absolute top-0 left-0 p-6 md:opacity-0 group-hover:opacity-100 transition duration-300 delay-100 overflow-hidden">
            <div className="absolute bottom-6 right-6 flex space-x-2">
              {tags.map((tag, i) => (
                <span
                  key={`${name}-tag-${i}`}
                  className={`text-white bg-black rounded-full px-3 py-2 font-mono text-xs min-width-[60px] md:translate-y-12 group-hover:translate-y-0 transition duration-300 delay-${
                    i * 300 + 300
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </FadeUp>
    </motion.div>
  );
};

export default CaseStudyCard;
