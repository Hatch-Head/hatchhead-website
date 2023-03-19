import {
  ParallaxBanner,
  ParallaxBannerLayer,
  EasingPreset,
} from "react-scroll-parallax";
import Base from "../../../assets/img/realiti-isometric/01-base.svg";
import HeartRate from "../../../assets/img/realiti-isometric/04-heart-rate.svg";
import BloodPressure from "../../../assets/img/realiti-isometric/08-blood-pressure.svg";
import Transport from "../../../assets/img/realiti-isometric/11-transport.svg";
import NavigationBar from "../../../assets/img/realiti-isometric/12-navigation-bar.svg";
import Popup from "../../../assets/img/realiti-isometric/10-popup.svg";
import Checklist from "../../../assets/img/realiti-isometric/07-checklists.svg";
import Events from "../../../assets/img/realiti-isometric/06-events.svg";
import React from "react";

const scrollProps = {
  //startScroll: 300,
  //endScroll: 900,
  easing: EasingPreset.easeOut,
};

const style = {
  height: 1200,
};

const layerClass = "bg-red-500 flex align-center";

const Wrap = ({ children }: { children: JSX.Element }) => (
  <div className="flex justify-center">{children}</div>
);

const IsometicHero = () => {
  return (
    <div className="mx-auto md:h-180 md:pt-96 md:pb-40 bg-gray-50 dark:bg-gray-1000">
      <ParallaxBanner style={{ height: 900, overflow: "visible" }}>
        <ParallaxBannerLayer translateY={[0, 0]}>
          <Wrap>
            <Base {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-30, -1]} {...scrollProps}>
          <Wrap>
            <NavigationBar {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-20, 0]} {...scrollProps}>
          <Wrap>
            <HeartRate {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-30, -1]} {...scrollProps}>
          <Wrap>
            <BloodPressure {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-30, -2]} {...scrollProps}>
          <Wrap>
            <Transport {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-40, -3]} {...scrollProps}>
          <Wrap>
            <Popup {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-40, -1]} {...scrollProps}>
          <Wrap>
            <Checklist {...style} />
          </Wrap>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer translateY={[-40, -1]} {...scrollProps}>
          <Wrap>
            <Events {...style} />
          </Wrap>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
};

export default IsometicHero;
