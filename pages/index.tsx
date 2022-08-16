import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Likes Graph</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Raid&apos;s Twitter Likes Graph</h1>
          {/* <button className={styles.card} onClick={() => {fetchLikes(setStatus); setStatus("Loading...")}}>Click me to fetch @raidsrc's Twitter likes.</button> */}
          {/* <h2>This web application produces data visualizations based on my Twitter likes. </h2> */}
          {/* <h3>It's a decent amount of data. 17.2k likes. This'll be fun.</h3> */}
          <p>{"Ok, since this web app is still under constructions, I'll use this page as a notepad to draft up notes on what this app should do."}
          </p>
          <p>
            todo:
          </p>
          <ol>
            <li> pretty page transitions and animations for the graph </li>
            <li>need to transform my twitter likes data into something graphable (csv?)</li>
            <li>set up an etl pipeline to snag data from twitter at the click of a button that the viewer of the page runs whenever they want and checks for new likes and verifies them against old likes and loads everything into a database (mongodb? redis upstash?)</li>
            <li>make everything SUPER pretty</li>
            <li>write up a couple blurbs on how i did it and put them all over the pages </li>
            <li>figure out how the hell to use d3 </li>
          </ol>
        </div>

        <div>
          <Link href="/page2" ><a className={styles.link}>Check it out &rarr;</a></Link> <br />
          <Link href="/pie-chart" ><a className={styles.link}>i am absolutely infuriated. simply incensed. in a fit of rage. how could this be</a></Link>
        </div>


        {/* <div>{status}</div> */}
      </main>


    </div>
  )
}

async function fetchLikes(setStatus: Dispatch<SetStateAction<string>>) {
  const queryString = "?pages_to_fetch=200"
  try {
    let response = await fetch(`/api/fetch-twitter-likes${queryString}`)
    let responseJson = await response.json()
    setStatus("Fetched.")
  } catch (error) {
    console.error(error)
  }
}

export default Home
