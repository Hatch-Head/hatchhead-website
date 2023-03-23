import {
  ParallaxBanner,
  ParallaxBannerLayer,
  EasingPreset,
  useParallax,
} from "react-scroll-parallax";
import StickyBox from "react-sticky-box";
import { useRef } from "react";
import Base from "../../../assets/img/realiti-build/01-base.svg";
import Skeleton from "../../../assets/img/realiti-build/00-skeleton.svg";
import Layer1 from "../../../assets/img/realiti-build/02-widget.svg";
import Layer2 from "../../../assets/img/realiti-build/03-widget.svg";
import Layer3 from "../../../assets/img/realiti-build/04-widget.svg";
import Layer4 from "../../../assets/img/realiti-build/05-widget.svg";
import Layer5 from "../../../assets/img/realiti-build/06-etc.svg";
import Layer6 from "../../../assets/img/realiti-build/07-blood-pressure.svg";
import Layer7 from "../../../assets/img/realiti-build/08-header.svg";
import Layer9 from "../../../assets/img/realiti-build/09-transport.svg";
import Layer10 from "../../../assets/img/realiti-build/10-events.svg";
import Layer11 from "../../../assets/img/realiti-build/11-heart-rate.svg";
import Layer12 from "../../../assets/img/realiti-build/12-spo2.svg";
import Layer13 from "../../../assets/img/realiti-build/13-checklist.svg";
import Layer14 from "../../../assets/img/realiti-build/14-tabs.svg";
import Layer15 from "../../../assets/img/realiti-build/15-button.svg";

const Wrap = ({ children }: { children: JSX.Element }) => (
  <div className="flex justify-center">{children}</div>
);

const style = {
  //height: 700,
  //maxWidth: "50%",
  position: "sticky",
  top: 100,
  pointerEvents: "none",
};

const BuildUI = () => {
  const el = useRef();
  const parallax = useParallax<HTMLDivElement>({
    style: {},
  });
  const scrollProps = {
    //startScroll: 11000,
    //endScroll: 12000,
    height: "40%",
    easing: EasingPreset.easeOut,
    width: 500,
    targetElement: el.current,
    //aspectRatio: "16 / 9",
    //scale: [2, 1],
    rootMargin: {
      top: -1000,
      bottom: 0,
      left: 0,
      right: 0,
    },
  };

  return (
    <div>
      <div
        className="h-[2700px] pt-40 container lg:px-80 mx-auto pointer-events-none"
        ref={parallax.ref}
      >
        <StickyBox offsetTop={200} offsetBottom={-300}>
          <ParallaxBanner style={{ height: 1000, overflow: "visible" }}>
            <ParallaxBannerLayer opacity={[0, 1]}>
              <div
              //style={{ background: "red", width: "100%", height: "100%" }}
              />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[0, 0]}
              scale={[1, 1]}
              rootMargin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            >
              <Wrap>
                <Base {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              opacity={[1, 0]}
              scale={[1, 1]}
            >
              <Wrap>
                <Skeleton {...style} />
              </Wrap>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[50, 0]}
              translateX={[-100, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer1 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[60, 0]}
              translateX={[-80, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer2 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[80, 0]}
              translateX={[30, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer3 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[90, 0]}
              translateX={[40, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer4 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[100, 0]}
              translateX={[140, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer5 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[80, 0]}
              translateX={[180, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer6 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-80, 0]}
              translateX={[0, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer7 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[100, 0]}
              translateX={[0, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer9 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-30, 0]}
              translateX={[-70, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer10 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-40, 0]}
              translateX={[-60, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer11 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-30, 0]}
              translateX={[-50, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer12 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-40, 0]}
              translateX={[-60, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer11 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[30, 0]}
              translateX={[200, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer13 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-50, 0]}
              translateX={[-70, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer14 {...style} />
              </Wrap>
            </ParallaxBannerLayer>

            <ParallaxBannerLayer
              {...scrollProps}
              translateY={[-1, 0]}
              translateX={[20, 0]}
              opacity={[0, 1]}
            >
              <Wrap>
                <Layer15 {...style} />
              </Wrap>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </StickyBox>
      </div>
    </div>
  );
};

export default BuildUI;
