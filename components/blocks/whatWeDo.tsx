import Card from "../../components/Card";

import BlackCups from "../../assets/img/black-3d-83.png";
import BlackDiamond from "../../assets/img/black-3d-15.png";
import BlackBlocks from "../../assets/img/black-3d-74.png";
import BlackBowel from "../../assets/img/black-3d-5.png";

type Props = {
  className?: string;
};

const WhatWeDo = ({ className }: Props) => (
  <div className={className}>
    <div className="grid md:grid-cols-2  gap-8">
      <Card
        title="Elevate how digital interfaces work, look and feel"
        src={BlackCups}
        alt="Elevate how digital interfaces work, look and feel"
      ></Card>
      <Card
        title="Designing new and innovative platforms and applications"
        src={BlackDiamond}
        alt="Designing new and innovative platforms and applications"
      ></Card>
      <Card
        title="Help hardware teams with their digital experiences"
        src={BlackBlocks}
        alt="Help hardware teams with their digital experiences"
      ></Card>
      <Card
        title="Supporting founders & leaders with their product vision"
        src={BlackBowel}
        alt="Supporting founders & leaders with their product vision"
      ></Card>
    </div>
  </div>
);

export default WhatWeDo;
