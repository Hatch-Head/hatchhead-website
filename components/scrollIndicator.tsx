import DownArrow from "../assets/img/arrow-down.svg";
import RightArrow from "../assets/img/arrow-right.svg";

type Props = {
  horizontal?: boolean;
  className?: string;
};

export const ScrollIndicator = ({
  horizontal = false,
  className = "",
}: Props) => {
  const animateClass = horizontal
    ? "animate-bounceHorizontal"
    : "animate-bounce";

  const Arrow = horizontal ? <RightArrow /> : <DownArrow />;
  return (
    <span className={`flex dark:text-white font-mono z-90 ${className}`}>
      Scroll
      <div
        className={`${animateClass} ml-2 px-2 flex items-center justify-center`}
      >
        {Arrow}
      </div>
    </span>
  );
};

export default ScrollIndicator;
