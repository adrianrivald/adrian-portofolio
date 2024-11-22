import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar/Navbar";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="max-w-full bg-gradient-to-r from-[#262626] to-indigo-950 text-neutral-100 py-8">
      {/* <AnimatedCursor
        showSystemCursor={true}
        innerSize={9}
        outerSize={12}
        color="193, 11, 111"
        outerAlpha={2.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </section>
  );
}
