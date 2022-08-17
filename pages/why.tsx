import type { NextPage } from 'next'
import Head from 'next/head'
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
          <Link href="/" ><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>Why</h1>
          <div className={styles.textBlurb}>
            <p>I've had COVID-19 this past week. It's really sucked. I don't get sick too often, but when I do get sick, I get really sick, and getting hit by COVID-19 has been no different. One day, in a drowsy, painful haze, I woke up and wondered what a histogram of my liked Tweets would look like. I went upstairs and drank a mug of Theraflu, then shuffled down to my laptop and started to code. </p>
          </div>

        </div>

        <div>
          <Link href="/twitter-api" ><a className={styles.link}>Onwards to the graph &rarr;</a></Link> <br />
          {/* <Link href="/bar-chart" ><a className={styles.link}>i am absolutely infuriated. simply incensed. in a fit of rage. how could this be</a></Link> */}
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
