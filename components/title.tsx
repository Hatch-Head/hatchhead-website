type Props = {
  title: string;
  subTitle?: string;
  offsetDot?: boolean;
  tint?: string;
  className?: string;
  element?: keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3">;
};

const Title = ({
  title,
  subTitle,
  offsetDot,
  tint,
  className,
  element: El = "h1",
}: Props) => {
  const colorClass = tint ? tint : "bg-primary dark:bg-gold";
  const dotClass = offsetDot
    ? "hidden min-[1700px]:block absolute left-[-94px] hidden "
    : "";

  return (
    <div className={`flex items-center relative ${className}`}>
      <El className="font-display text-xl md:text-2xl mb-0 text-neutral dark:text-neutral-0">
        {title}
      </El>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default Title;
