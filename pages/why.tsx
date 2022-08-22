import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import HeadComponent from '../components/HeadComponent'
import styles from '../styles/Home.module.css'
import animationStyles from "../styles/PageTransitions.module.css"
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'

const Why: NextPage = () => {
  const router = useRouter()
  return (
    <CSSTransition in={router.asPath === "/why"} classNames={{ ...animationStyles }} timeout={3000}>

      <div className={styles.container}>
        <HeadComponent />

        <main className={styles.main}>
          <div className={styles.mainmain}>
            <Link href="/" ><a className={styles.link}>&larr; Go back </a></Link> <br />
            <h1>Why</h1>
            <div className={styles.textBlurb}>
              <p>{`I've had COVID-19 this past week. It's really sucked. I don't get sick too often, but when I do get sick, I get really sick, and getting hit by COVID-19 has been no different. I haven't got much to do besides eat, sleep, take drugs, and recover. `}</p>
              <p>{`One day, in a drowsy, painful haze, I woke up and wondered what a histogram of my liked Tweets sorted by time would look like. Just absolutely the randomest of ideas. I went upstairs and drank a mug of Theraflu, then shuffled down to my laptop and started coding. Cause I had nothing better to do.`}</p>
            </div>
          </div>

          <div>
            <Link href="/twitter-api" scroll={false} ><a className={styles.link}>The Twitter API &rarr;</a></Link> <br />
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

export default Why
