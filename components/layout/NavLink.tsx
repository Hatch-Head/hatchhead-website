import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cva, VariantProps } from "class-variance-authority";

const linkStyle = cva("hover:text-primary-100 dark:hover:text-gold", {
  variants: {
    active: {
      true: "text-primary-100 dark:text-gold",
      false: "",
    },
  },
  defaultVariants: {
    active: false,
  },
});

interface Props extends LinkProps, VariantProps<typeof linkStyle> {
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, className, ...rest }: Props) => {
  const router = useRouter();

  // Note - for now only matches exact
  const baseClass = linkStyle({ active: router.pathname === href.toString() });

  return <Link href={href} className={`${baseClass} ${className}`} {...rest} />;
};

export default NavLink;
