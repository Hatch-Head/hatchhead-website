import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimateSharedLayout } from "framer-motion";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ParallaxProvider>
  );
}
