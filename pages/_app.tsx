import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-P8M72T0GEL`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P8M72T0GEL');
          `}
      </Script>

      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
