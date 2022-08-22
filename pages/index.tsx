import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import animationStyles from "../styles/PageTransitions.module.css"
import twittersvg from "../public/twitter.svg"
import HeadComponent from '../components/HeadComponent'
import { CSSTransition } from "react-transition-group"
import { useRouter } from 'next/router'

const Index: NextPage = () => {
  const router = useRouter()
  return (
    <CSSTransition in={router.asPath === "/"} classNames="index" timeout={3000}>
      <div className={styles.container}>
        <HeadComponent />

        <main className={styles.main}>
          <div className={styles.mainmain}>

            <h1><a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://twitter.com/raidsrc">@raidsrc</a>{"'s Twitter Likes Graph"} <Image alt='Twitter icon' src={twittersvg} width={30} height={30}></Image> </h1>
            {/* <button className={styles.card} onClick={() => {fetchLikes(setStatus); setStatus("Loading...")}}>Click me to fetch @raidsrc's Twitter likes.</button> */}
            {/* <h2>This web application produces data visualizations based on my Twitter likes. </h2> */}
            {/* <h3>It's a decent amount of data. 17.2k likes. This'll be fun.</h3> */}

            <div className={styles.textBlurb}>
              <p>{"Ok, since this web app is still under construction, I'll use this page as a notepad to draft up notes on what this app should do."}
              </p>
              <p>
                todo:
              </p>
              <ol>
                <li>set up an etl pipeline to snag data from twitter at the click of a button that the viewer of the page runs whenever they want and checks for new likes and verifies them against old likes and loads everything into a database (mongodb? redis upstash?)</li>
                <li> pretty page transitions and animations all over </li>
                <li>make everything SUPER pretty</li>
              </ol>
              <h2>actual blurb to put on page when done coding</h2>
              <p>Behold! A web app I made/am making in mid-August 2022 when I had/have COVID-19 and lacked/lack the energy, brainpower, willpower, and lung function to do anything productive. In this web application, I walk you through this crazy idea I had to plot out my Twitter usage throughout the years. I made this app using NextJS, Victory, and d3. Postman was a big help too. Data fetched from the Twitter API. </p>

            </div>
          </div>

          <div>
            <Link href="/why" ><a className={styles.link}>Check it out &rarr;</a></Link> <br />
            {/* <Link href="/bar-chart" ><a className={styles.link}>i am absolutely infuriated. simply incensed. in a fit of rage. how could this be</a></Link> */}
          </div>
          {/* <div>{status}</div> */}
        </main>
      </div>
    </CSSTransition>
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
