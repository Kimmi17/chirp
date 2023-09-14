import Head from "next/head";

import { type NextPage } from "next";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div>Post view</div>
      </main>
    </>
  );
};

export default SinglePostPage;
