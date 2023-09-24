import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Alex from "../../assets/img/alex-afflik.png";
import Lok from "../../assets/img/always/lok-tsang.jpeg";

type Quote = {
  image: StaticImageData;
  quote: string;
  role: string;
  name: string;
  title: string;
  link: string;
};

const data: Quote[] = [
  {
    image: Alex,
    quote:
      "Hatch Head complement our team's capability with their knowledge of digital design and user experience. It's a pleasure to have access to them, where they that can jump in and work to deliver great outcomes.",
    name: "Alex Afflick",
    title: "CTO",
    link: "/work/audeara",
    role: "CTO",
  },
  {
    image: Lok,
    quote:
      "It has been exceptional working with Hatch Head. They bring a wealth of experience and creativity to the table. They were able to bring creative solutions to problems by keeping open minds and unique perspectives throughout the process. ",
    name: "Lok Tsang",
    title: "Founder",
    link: "/work/always",
    role: "Founder",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images container max-w-5xl flex relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.02 }}
          >
            <Link
              href={data[currentIndex].link}
              className=" flex justify-center items-center space-x-12"
            >
              <Image
                src={data[currentIndex].image}
                className="rounded-full"
                width={255}
                height={255}
                alt={data[currentIndex].name}
              />
              <div>
                <div className="text-lg dark:text-white mb-8">
                  {data[currentIndex].quote}
                </div>
                <div className="dark:text-neutral-350 text-base">
                  <strong>{data[currentIndex].name}</strong> -{" "}
                  {data[currentIndex].role}
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
        {/* <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div> */}
        <button
          onClick={handleNext}
          className="slide_direction w-24 h-24 flex shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-gold-100 hover:scale-110 transition-all z-10 absolute -bottom-12 right-0 fill-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path
              d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
              fill="inherit"
            />
          </svg>
        </button>
      </div>
      <div className="carousel-indicator">
        {data.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
