import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const containerStyle = cva("container relative", {
  variants: {
    size: {
      DEFAULT: "py-12",
      small: "py-8",
      medium: "py-12",
      large: "py-24",
      xLarge: "py-48",
      full: "h-screen",
    },
    width: {
      DEFAULT: "w-full",
      small: "max-w-2xl",
      medium: "max-w-4xl",
      large: "max-w-7xl",
    },
    wrap: {
      true: "flex-wrap",
      false: "",
    },
  },
  defaultVariants: {
    size: "DEFAULT",
    width: "DEFAULT",
    wrap: false,
  },
});

export interface ContainerProps extends VariantProps<typeof containerStyle> {
  children: React.ReactNode;
  className?: string;
  tint?: string;
}

export const Container = ({
  children,
  width,
  size,
  className = "",
  tint = "default",
  wrap,
  ...props
}: ContainerProps) => {
  const baseClasses = containerStyle({ width, size, wrap });

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};
