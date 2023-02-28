// import { motion, Variants } from "framer-motion";

// type Props = {
//   tag?: keyof JSX.IntrinsicElements;
//   text: string;
//   splitLetters?: boolean;
//   className?: string;
// };

// const AnimatedText = ({
//   tag = "p",
//   splitLetters = false,
//   className,
//   text,
// }: Props) => {
//   const delimiter = splitLetters ? "" : " ";
//   const parts = text.split(delimiter);
//   const Tag = tag;

//   const item: Variants = {
//     hidden: {
//       y: "200%",
//       rotate: Math.random() * 100,
//       //opacity: 0,
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
//     },
//     exit: {
//       y: "200%",
//       rotate: Math.random() * 100,
//       opacity: 1,
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.05 },
//     },
//     visible: {
//       y: 0,
//       rotate: 0,
//       opacity: 1,
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
//     },
//   };

//   return (
//     <Tag className={className}>
//       {parts.map((part, i) => (
//         <motion.span key={`${part}-${i}`} variants={item} layout>
//           {part}
//         </motion.span>
//       ))}
//     </Tag>
//   );
// };

// export default AnimatedText;

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// Word wrapper
type WrapperProps = {
  children: ReactNode;
};
const Wrapper = (props: WrapperProps): JSX.Element => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper inline-block">{props.children}</span>;
};

export type AnimatedCharactersProps = {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: string;
  startColor?: string;
  splitLetters?: boolean;
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = ({
  text,
  tag: Tag = "p",
  className = "",
  splitLetters = false,
}: AnimatedCharactersProps) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Framer Motion variant object, for controlling animation
  const item: Variants = {
    hidden: {
      y: "200%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
    },
    exit: {
      y: "200%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
    },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = text.split(" ") || [];

  // Push each word into words array
  const words = splitWords.map((word) => word.split(""));

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  const elements = splitLetters ? words : splitWords;

  const renderLetters = () =>
    words.map((word, index) => {
      return (
        // Wrap each word in the Wrapper component
        <motion.div
          className="App"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some" }}
          variants={container}
        >
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "visible",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        </motion.div>
      );
    });

  const renderWords = () => {
    return (
      <motion.div
        className="App"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: "some" }}
        variants={container}
      >
        {splitWords.map((word, index) => {
          return (
            // Wrap each word in the Wrapper component
            <span
              style={{
                //overflow: "hidden",
                display: "inline-block",
              }}
              key={index}
            >
              <motion.span style={{ display: "inline-block" }} variants={item}>
                {word}
              </motion.span>
              <span>&nbsp;</span>
            </span>
          );
        })}
      </motion.div>
    );
  };

  // Get the tag name from tagMap

  return (
    <Tag className={className}>
      {splitLetters ? renderLetters() : renderWords()}
    </Tag>
  );
};

export default AnimatedCharacters;
