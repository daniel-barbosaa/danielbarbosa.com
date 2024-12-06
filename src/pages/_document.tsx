import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=keyboard_double_arrow_right" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
