import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import HeadComponent from '../components/HeadComponent'
import styles from '../styles/Home.module.css'

const Why: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div className={styles.mainmain}>
          <Link href="/" scroll={false}><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>Why</h1>
          <div className={styles.textBlurb}>
            <p>{`I've had COVID-19 these past 2 weeks. It's really sucked. I don't get sick too often, but when I do get sick, I get really sick, and getting hit by COVID-19 has been no different. I haven't got much to do besides eat, sleep, take drugs, and recover. `}</p>
            <p>{`One day, in a drowsy, painful haze, I woke up and wondered what a histogram of my liked Tweets sorted by time would look like. Just absolutely the randomest of ideas. I went upstairs and drank a mug of Theraflu, then shuffled down to my laptop and started coding. Cause I had nothing better to do.`}</p>
          </div>
        </div>

        <div>
          <Link href="/twitter-api" scroll={false} ><a className={styles.link}>The Twitter API &rarr;</a></Link> <br />
        </div>
      </main>
    </div>
  )
}

export default Why
