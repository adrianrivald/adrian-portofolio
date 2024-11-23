import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <>
      {/* {loading && (
        <div className="loading-screen h-screen bg-white">Loading...</div>
      )} */}

      <section className="max-w-full bg-gradient-to-r from-[#262626] to-indigo-950 text-neutral-100 py-8">
        <Component {...pageProps} />
      </section>
    </>
  );
}
