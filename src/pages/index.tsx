import Head from "next/head";
import React from "react";
import Main from "../components/main";
export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend template</title>
        <meta name="description" content="Frontend template by Wealize" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
