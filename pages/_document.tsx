import { Html, Head, Main, NextScript } from "next/document";

import { Inter } from "@next/font/google";
// const inter = Inter()

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
