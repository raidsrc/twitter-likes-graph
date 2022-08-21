import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Twitter Likes Graph</title>
      <meta name="description" content="Cool web app summarizing my efforts to chart out my 20k Twitter likes." />
      <link rel="icon" href="/twitter.png" />
    </Head>
  )
}