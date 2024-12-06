import { Html, Head, Main, NextScript } from "next/document";

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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
