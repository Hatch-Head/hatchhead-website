import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  role: string;
  image?: string | StaticImageData;
  quote: string;
  className?: string;
};

const Testimonial = ({ quote, name, role, image, className = "" }: Props) => (
  <section className={`${className}`}>
    <div className="container max-w-3xl text-lg mb-12 dark:text-white">
      <blockquote>"{quote}"</blockquote>
    </div>

    <div>
      <div className="container max-w-4xl flex items-center justify-center space-x-4">
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

export default Testimonial;
