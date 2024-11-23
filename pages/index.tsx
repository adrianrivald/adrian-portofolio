import Head from "next/head";
import React, { useRef } from "react";
import { Hero, Content, Layout } from "../components";

export default function Home() {
  // const [selectedItem, setSelectedItem] = React.useState(""); // TODO: Implement this state if want to do an action on clicking card!
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);

  const onClickContent = (title: string) => {
    // setSelectedItem(title);
  };

  return (
    <div>
      <Head>
        <title>Adrian Rivaldy - Frontend Engineer</title>
        <meta
          name="description"
          content="Portofolio of Adrian Rivaldy - Frontend Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isFlex>
        <Hero aboutRef={aboutRef} expRef={expRef} projectRef={projectRef} />
        <Content
          onClickContent={onClickContent}
          aboutRef={aboutRef}
          expRef={expRef}
          projectRef={projectRef}
        />
      </Layout>
    </div>
  );
}
