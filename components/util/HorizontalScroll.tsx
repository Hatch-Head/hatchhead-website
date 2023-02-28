import { motion, useAnimation } from "framer-motion";
import { useScroll } from "react-use-gesture";

type Props = {
  items: JSX.Element[];
};

const clamp = (value: number, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const HorizontalScrollContainer = ({ items }: Props) => {
  const controls = useAnimation();
  const bind = useScroll((event) => {
    controls.start({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <div
      className="container flex overflow-x-scroll w-full mb-8 py-4"
      {...bind()}
    >
      {items.map((item, key) => (
        <motion.div key={key} className="card" animate={controls}>
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default HorizontalScrollContainer;
