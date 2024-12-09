import { Html, Head, Main, NextScript } from "next/document";
import Bicon from '../../public/d.png'

export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head />
      <link
        rel="preload"
        href="/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
      />
      <title>Daniel Barbosa</title>
      <link rel="icon" href="/d.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
