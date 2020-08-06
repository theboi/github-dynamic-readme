import React from "react";
import Head from "next/head";
import style from "./style.module.css";

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>GitHub README Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.main}></div>
    </>
  );
}
