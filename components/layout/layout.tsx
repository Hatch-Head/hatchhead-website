import React from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global";
import { Theme } from "./theme";
import { useDarkMode } from "usehooks-ts";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

const variants = {
  hidden: { opacity: 0, y: -90 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  exit: { opacity: 0, y: 0, transition: { duration: 0.4 } },
};

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { isDarkMode } = useDarkMode();
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Hatch Head</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#f0ede8" />
        <meta name="theme-color" content="#ffffff" />

        <link
          rel="preload"
          as="font"
          href="/fonts/GeneralGrotesqueMono-Demi.woff"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/GeneralGrotesqueMono-Demi.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {/* <Theme data={data?.theme}> */}
      <Theme>
        <ThemeProvider enableSystem={true} attribute="class">
          <div
            className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-1000 bg-noise text-gray-800 `}
          >
            <Header />

            <div className="flex-1 flex flex-col">
              {/* <AnimatePresence> */}
              <main
              //variants={variants} // Pass the variant object into Framer Motion
              // initial="hidden" // Set the initial state to variants.hidden
              // animate="enter" // Animated state to variants.enter
              // exit="exit" // Exit state (used later) to variants.exit
              // transition={{ type: "linear" }} // Set the transition to linear
              // key={asPath}
              >
                {children}
              </main>
              {/* </AnimatePresence> */}
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </Theme>
    </>
  );
};
