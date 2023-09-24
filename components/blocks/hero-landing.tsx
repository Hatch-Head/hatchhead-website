import * as React from "react";
import { Container, ContainerProps } from "../util/container";
import { Section, SectionProps } from "../util/section";
import ScrollIndicator from "../scrollIndicator";
import AnimatedText from "../transitions/AnimatedText";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("../VideoPreload"));

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

export const HeroBannerLanding = ({
    size = "full",
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
        mp4: 'video/mp4; codecs="hvc1"',
        webm: "video/webm",
    };

    return (
        <Section
            className="relative z-1 items-center flex"
            style={{ clipPath: "inset(0)" }}
            {...sectionProps}
        >
            {hasVideo && (
                <Video
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload={"none"}
                    poster={poster}
                    className="object-center object-cover h-full"
                >
                    {videoSource.map((src, i) => {
                        const extension = (src.split(".").pop() as string) || "";
                        if (extension && mediaTypes[extension]) {
                            return <source key={i} src={src} type={mediaTypes[extension]} />;
                        }
                    })}
                </Video>
            )}

            <Container
                {...containerProps}
                //style={{ clipPath: "inset(0 0 0 0)" }} // make fixed video get clipped by content
                className={`grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center relative ${heightClass}`}
            >

            </Container>
        </Section>
    );
};
