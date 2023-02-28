import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  children?: React.ReactNode;
  src: string | StaticImageData;
  alt?: string;
}

const Card = ({ title, children, alt, src }: Props) => (
  <div className="shrink-0 grow text-center bg-white dark:bg-neutral-900 rounded-sm p-8 md:p-12 items-center flex-col flex w-full">
    <h3 className="font-bold text-base text-neutral mb-2 dark:text-white">
      {title}
    </h3>
    <p className="text-neutral-600 mb-8 dark:text-neutral-300">{children}</p>
    <div className="align-center flex justify-center">
      <Image
        src={src}
        width={180}
        height={180}
        alt={alt || ""}
        className="darks:mix-blend-difference"
      />
    </div>
  </div>
);

export default Card;
