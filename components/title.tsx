type Props = {
  title: string;
  subTitle?: string;
  offsetDot?: boolean;
  tint?: string;
  className?: string;
};

const Title = ({ title, subTitle, offsetDot, tint, className }: Props) => {
  const colorClass = tint ? tint : "bg-primary dark:bg-gold";
  const dotClass = offsetDot
    ? "hidden min-[1700px]:block absolute left-[-94px] hidden "
    : "";

  return (
    <div className={`flex items-center relative ${className}`}>
      {/* <div
        className={`w-8 h-8 md:w-16 md:h-16 rounded-full mr-4 md:mr-12 ${dotClass} ${colorClass}`}
      /> */}
      <h1 className="font-display text-xl md:text-2xl mb-0 text-neutral dark:text-neutral-0">
        {title}
      </h1>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default Title;
