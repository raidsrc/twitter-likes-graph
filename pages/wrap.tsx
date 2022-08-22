import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import HeadComponent from '../components/HeadComponent'
import styles from '../styles/Home.module.css'

const Wrap: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div>
          <Link href="/graph" ><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>Wrap-up</h1>
          <div className={styles.textBlurb}>
            <p>{`Well that was a fun exercise in web programming, using the Twitter API, ETL, and data visualization. I've never wielded data on this scale before. Almost 20k tweets. Wow. That's a lot more data than I'm used to handling.`}</p>
            <p>{`I still have COVID-19. Tested positive earlier today. It's been more than a week since I first started showing symptoms and I'm still suffering. My throat's doing better but I'm still feeling drowsy and not all there in the head. I feel like my brain isn't functioning at full capacity. Like I'm drunk. Even though I haven't had a single microliter of alcohol recently. So I'm gonna go back to resting. Hope you enjoyed taking a tour through this web app. Peace.`}</p>
          </div>

        </div>

        <div>
          <Link href="/" scroll={false} ><a className={styles.link}>Back to the start &rarr;</a></Link> <br />
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

export default Wrap
