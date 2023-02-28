import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const sectionStyle = cva(
  "flex-1 relative transition duration-150 ease-out body-font bg-noise",
  {
    variants: {
      color: {
        DEFAULT: "bg-gray-50 dark:bg-gray-1000 dark:text-white",
        transparent: "",
        base: "dark:bg-gray-1000bg-white dark:bg-gray-700 pb-24",
        mid: "bg-gray-50 dark:bg-gray-800 pb-24",
        dark: "bg-gray-900 dark:bg-gray-900 pb-24",
      },
      offsetTop: {
        false: "",
        true: "pt-20",
      },
    },
    defaultVariants: {
      color: "DEFAULT",
      offsetTop: true,
    },
  }
);

export interface SectionProps extends VariantProps<typeof sectionStyle> {
  children: React.ReactNode;
  className?: string;
  style?: any;
}

export const Section = ({
  children,
  color,
  className = "",
  offsetTop,
  style = {},
}: SectionProps) => {
  //const theme = useTheme();

  const baseClass = sectionStyle({ color, offsetTop });
  return (
    <section style={style} className={`${baseClass} ${className}`}>
      {children}
    </section>
  );
};
