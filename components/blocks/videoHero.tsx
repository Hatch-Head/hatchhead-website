import React from "react";
import { Container } from "../util/container";

type Props = {
  video: string;
};

export const VideoHero = ({ video }: Props) => (
  <Container size="large">
    {/* <FoldUp> */}
    <video muted playsInline autoPlay loop className={`card`}>
      <source src={video} type="video/quicktime" />
    </video>
    {/* </FoldUp> */}
  </Container>
);
