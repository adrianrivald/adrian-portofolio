import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="max-w-full bg-gradient-to-r from-[#262626] to-indigo-950 text-neutral-100 py-8">
      <Component {...pageProps} />
    </section>
  );
}
