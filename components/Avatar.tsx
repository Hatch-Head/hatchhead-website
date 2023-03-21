import Image from "next/image";

type Props = {
  src: string;
  name: string;
};

const Avatar = ({ src, name }: Props) => (
  <div className="rounded-full bg-primary dark:bg-gold w-[50px] h-[50px] overflow-hidden">
    <Image src={src} alt={`${name}'s avatar`} width={50} height={50} />
  </div>
);

export default Avatar;
