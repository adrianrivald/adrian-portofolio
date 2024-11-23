import Head from "next/head";
import React from "react";
import { Layout, Projects } from "../../components";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>All Projects - Adrian Rivaldy</title>
        <meta
          name="description"
          content="All Projects portofolio of Adrian Rivaldy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Projects />
      </Layout>
    </>
  );
}

export default ProjectsPage;
