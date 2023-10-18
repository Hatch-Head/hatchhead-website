import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  name: string;
  role: string;
  image?: string | StaticImageData;
  quote: string | React.ReactNode;
  className?: string;
};

const Testimonial = ({ quote, name, role, image, className = "" }: Props) => {
  return (
    <section className={`${className}`}>
      <div className="container max-w-4xl text-sm mb-12 dark:text-white">
        <blockquote className="relative">
          <div className=" md:block md:absolute left-[-80px] top-[-20px] leading-none text-2xl font-bold opacity-30">
            {String.fromCharCode(8220)}
          </div>
          {quote}
          <div className=" md:block md:absolute right-[-50px] bottom-[-80px] leading-none text-4xl font-bold opacity-30">
            {String.fromCharCode(8220)}
          </div>
        </blockquote>
      </div>

      <div>
        <div className="container max-w-5xl flex items-center justify-center space-x-4">
          {image && (
            <Image
              src={image}
              width={70}
              height={70}
              alt={`Profile picture of ${name}`}
              className="rounded-full"
            />
          )}
          <div className="block">
            <div className="text-bold text-base mb-0 leading-none dark:text-white">
              {name}
            </div>
            <div className="text-neutral-500 text-xs">{role}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
