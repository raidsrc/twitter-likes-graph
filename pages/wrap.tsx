import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import HeadComponent from '../components/HeadComponent'
import styles from '../styles/Home.module.css'

type props = {
  setFinished: Dispatch<SetStateAction<boolean>>
}

const Wrap: NextPage<props> = (props) => {
  useEffect(()=> {
    props.setFinished(true)
  }, [])
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div>
          <Link href="/graph" scroll={false}><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>Wrap-up</h1>
          <div className={styles.textBlurb}>
            <p>{`Well that was a fun exercise in web programming, using the Twitter API, ETL, and data visualization. I've never handled this much data before. Almost 20k tweets. Wow.`}</p>
            <p>{`I still have COVID-19. Tested positive earlier today. It's been more than a week since I first started showing symptoms and I'm still suffering. My throat's doing better but I'm still feeling drowsy and not all there in the head. People call it brain fog. It sucks. So I'm gonna go back to resting. Hope you enjoyed taking a tour through this web app. Peace.`}</p>
          </div>

        </div>

        <div>
          <Link href="/" scroll={false} ><a className={styles.link}>Back to the start &rarr;</a></Link> <br />
        </div>
      </main>
    </div>
  )
}

export default Wrap
