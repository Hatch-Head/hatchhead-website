import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children?: JSX.Element;
  className?: string;
  stagger?: number;
};
const FadeUp = ({ children, className = "", stagger = 0 }: Props) => {
  return (
    <div className={`overflow-visible ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, transform: "translateY(0)" },
          hidden: { opacity: 0, transform: "translateY(100px)" },
        }}
        viewport={{ once: false, amount: "some" }}
        transition={{ ease: "easeOut", duration: 0.9, delay: stagger * 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeUp;
