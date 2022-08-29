import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import twittersvg from "../public/twitter.svg"
import HeadComponent from '../components/HeadComponent'

type props = {
  finished: boolean
}

const Index: NextPage<props> = ({ finished }) => {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div className={styles.mainmain}>
          {finished ? <div>
            <Link href="/wrap" scroll={false}><a className={styles.link}>&larr; Go back </a></Link> <br />
          </div> : ""}
          <h1><a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://twitter.com/raidsrc">@raidsrc</a>{"'s Twitter Likes Data Analysis Adventure"} <Image alt='Twitter icon' src={twittersvg} width={30} height={30}></Image> </h1>

          <div className={styles.textBlurb}>
            {/* <p>{"Ok, since this web app is still under construction, I'll use this page as a notepad to draft up notes on what this app should do."}
              </p>
              <p>
                todo:
              </p>
              <ol>
                <li>set up an etl pipeline to snag data from twitter at the click of a button that the viewer of the page runs whenever they want and checks for new likes and verifies them against old likes and loads everything into a database (mongodb? redis upstash?)</li>
                <li>more animations</li>
              </ol>
              <h2>actual blurb to put on page when done coding</h2> */}
            <p>Behold! A web app I made in mid-August 2022 when I had COVID-19 and lacked the energy, brainpower, willpower, and lung function to do anything productive. In this web application, I walk you through this crazy idea I had to plot out my Twitter usage throughout the years. I made this app using NextJS, Victory, Framer Motion, and d3. Postman was a big help too. Data fetched from the Twitter API. </p>
          </div>
        </div>

        <div>
          <Link href="/why" scroll={false} ><a className={styles.link}>Check it out &rarr;</a></Link> <br />
        </div>
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

export default Index
