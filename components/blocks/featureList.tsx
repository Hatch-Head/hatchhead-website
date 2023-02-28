import Link from "next/link";
import { ArrowRight } from "iconoir-react";
type Item = {
  label: string;
  href?: string;
};

type Props = {
  items: Item[];
};

const FeatureList = ({ items }: Props) => {
  const style =
    "py-8 border-0 border-color-black border-b w-full block flex items-center text-base space-x-2";

  return (
    <ul className="w-full border-0 border-t border-color-black text-base no-prose">
      {items.map(({ label, href }, index) => {
        if (href) {
          return (
            <Link key={href} href={href} className={style}>
              <ArrowRight />
              <span>{label}</span>
            </Link>
          );
        } else {
          return (
            <li key={label} className={style}>
              {label}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default FeatureList;
