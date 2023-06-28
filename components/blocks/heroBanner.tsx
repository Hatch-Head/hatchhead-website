import * as React from "react";
import { Container, ContainerProps } from "../util/container";
import { Section, SectionProps } from "../util/section";
import Row from "../util/row";
import ScrollIndicator from "../scrollIndicator";
import AnimatedText from "../transitions/AnimatedText";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  size?: "large" | "medium" | "small" | "full";
  sectionProps?: Partial<SectionProps>;
  containerProps?: Partial<ContainerProps>;
  video?: string | string[];
  image?: {
    src: string;
    alt?: string;
  };
  tagline?: string;
  headline?: string;
  text?: string;
};

export const HeroBanner = ({
  size = "large",
  headline,
  tagline,
  text,
  video,
  image,
  sectionProps,
  containerProps = { size: "xLarge" },
}: Props) => {
  const heightClass = size === "large" ? "h-screen" : "";
  const poster = typeof image?.src == "string" ? image.src : undefined;

  const videoSource = typeof video == "string" ? [video] : video;
  const hasVideo = videoSource !== undefined;

  type MediaKey = {
    [key: string]: string;
  };

  const mediaTypes: MediaKey = {
    mp4: "video/mp4",
    webm: "video/webm",
  };

  return (
    <Section
      className="relative z-1 items-center flex"
      style={{ clipPath: "inset(0)" }}
      {...sectionProps}
    >
      {hasVideo && (
        <video
          playsInline
          autoPlay
          muted
          loop
          preload={"none"}
          poster={poster}
          className="absolute animate-fadeIn z-0 w-full min-w-full min-h-full max-w-none l-0 t-0 opacity-30 object-center object-cover h-full"
        >
          {videoSource.map((src, i) => {
            const extension = (src.split(".").pop() as string) || "";
            if (extension && mediaTypes[extension]) {
              return <source key={i} src={src} type={mediaTypes[extension]} />;
            }
          })}
        </video>
      )}

      <Container
        {...containerProps}
        //style={{ clipPath: "inset(0 0 0 0)" }} // make fixed video get clipped by content
        className={`grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center relative ${heightClass}`}
      >
        <div>
          <>
            <div className="row-start-2 w-full lg:w-4/5 lg:row-start-1 lg:col-start-1 lg:col-end-4  z-5">
              {tagline && (
                <h2 className="relative inline-block mb-0 text-md font-bold tracking-wide title-font z-20 dark:text-gray-50">
                  {tagline}
                </h2>
              )}

              {headline && (
                <AnimatedText
                  className="w-full relative mb-8 md:md-2 text-[3rem] leading-[3rem] md:text-3xl 2xl:text-4xl text-neutral-1000 tracking-normal font-display dark:text-gold"
                  tag="h1"
                  text={headline}
                />
              )}
              {text && (
                <div
                  className={`prose text-base md:text-lg mx-auto lg:mx-0 mb-10 text-gray-500 dark:text-gray-50`}
                >
                  {text}
                </div>
              )}
              {/* {actions && (
            <Actions
              className="justify-center lg:justify-start py-2"
              parentColor={color}
              //actions={data.actions}
            />
          )} */}
            </div>
            {image && video === undefined && (
              <div className="row-start-1 flex justify-center">
                <img
                  className="w-full max-w-xs lg:max-w-none h-auto"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
            )}
            <ScrollIndicator className="absolute bottom-12 right-0 z-100" />
          </>
        </div>
      </Container>
    </Section>
  );
};
