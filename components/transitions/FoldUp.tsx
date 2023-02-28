import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children?: JSX.Element;
};
const FoldUp = ({ children }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"],
  });

  const endPosition = 0.8;
  const rotateX = useTransform(scrollYProgress, [0, endPosition], [-80, 0]);
  const translateY = useTransform(scrollYProgress, [0, endPosition], [200, 0]);

  return (
    <div ref={ref} style={{ perspective: 2000 }}>
      <motion.div
        style={{
          rotateX,
          translateY,
        }}
        className="shadow-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FoldUp;
