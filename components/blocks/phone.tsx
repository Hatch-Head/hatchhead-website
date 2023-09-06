import Asset from "../../assets/img/iphone-blue.png";
import Image from "next/image";
import { cloneElement } from "react";
type Props = {
  children: React.ReactElement;
  className?: string;
};

const Phone = ({ children, className }: Props) => {
  const child = cloneElement(children, {
    className: "w-full bg-primary rounded-[5%] object-cover aspect-[437/941]",
  });
  return (
    <div className={`relative aspect-[437/884] ${className}`}>
      <div className="top-0 left-0 w-full z-0 h-full px-[5%] pt-[4%]">
        {child}
      </div>
      <div className="absolute overflow-visible top-0 left-0">
        <Image src={Asset} alt="iPhone" className="z-1  h-full w-full " />
      </div>
    </div>
  );
};

export default Phone;
