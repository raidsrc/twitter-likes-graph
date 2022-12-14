import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import postman from "../public/postman.png"
import HeadComponent from '../components/HeadComponent'

const Data: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div className={styles.mainmain}>
          <Link href="/twitter-api" scroll={false}><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>The data</h1>
          <div className={styles.textBlurb}>
            <p>{"Here's a small snippet of my liked tweet data straight off Twitter. "}</p>
            <div className={styles.code}>
              {/* this one will show up when viewing on desktop */}
              <pre className={styles.preWrap}>
                {`{
  "data": [
    {
      "created_at": "2022-07-20T20:49:42.000Z",
      "id": "1549859114070773764",
      "text": "full metal alchemist: brotherhood - rain (2010) https://t.co/JQHT2DIcQB"
    },
    ...
    {
      "created_at": "2022-07-04T20:44:33.000Z",
      "id": "1544059613481504771",
      "text": "why does every open‐source React application on GitHub put an emoji before every header on their README. like we get it, you use React"
    },
    ...
    {
      "created_at": "2022-06-11T02:14:35.000Z",
      "id": "1535445358481797120",
      "text": "i hate this weather i’m dying😵‍💫 https://t.co/jQgIsdpJuv"
    }, 
    ...
  ],
  "meta": {
    "result_count": 95,
    "next_token": "7140dibdnow9c7btw481d30shnq9yvr7mxcbe41hq6wc8"
  }
}`}

              </pre>
            </div>
            <p>{"The ellipses represent data that I've removed to shorten the snippet."}</p>
            <p>{"After fetching and collecting data on likes straight from the Twitter API, I had to pull relevant info out of the response from Twitter, format it correctly, and combine all the pages of my Twitter likes data into a single data structure. Here's what that final data structure looks like. It's a long array containing every Twitter like object."}</p>
            <div className={styles.code}>
              {`[ ... {"id":"1121782001261064192","created_at":"2019-04-26T14:24:05.000Z","text":"When you midset but hear someone spike their controller across the venue https://t.co/Hi9gPRSZLb"},{"id":"1121919405938675712","created_at":"2019-04-26T23:30:05.000Z","text":"This marks my 20th year (well, i dont recall the exact date i had it in my hands, but close enough) playing Smash. I still remember playing it alone a lot in my room, finding ways to use imagination to entertain myself alone. I even remember watching the commercial for it on TV. https://t.co/mwX4cmwAed"},{"id":"1121184412585082890","created_at":"2019-04-24T22:49:29.000Z","text":"5 jobs I've had: \n\n1) =INDEX MATCH\n2) =VLOOKUP\n3) =COUNT\n4) TEXTING NELLY\n5) =IF"},{"id":"1121536049484845056","created_at":"2019-04-25T22:06:45.000Z","text":"Hrrngh Colonel... https://t.co/rEW2Qt0DeX"},{"id":"1121818142211100672","created_at":"2019-04-26T16:47:42.000Z","text":"About 4 Years ago, I went over to a buddy’s house to play Smash. I never had a triwing, and he said, “beat me in a MM and I’ll give you mine.” Today, he just lost his battle to Lymphoma, and I don’t think I would have ever taken the interest in controllers if it weren’t for him.."},{"id":"1117620898046070785","created_at":"2019-04-15T02:49:21.000Z","text":"Happy 4/13 everyone! I’m late but this epilogue really got me emotional, hope everything turns out alright :,(\n\n#Homestuck #HomestuckEpilogue #homestuck413 https://t.co/ELMDNLHRBy"}, ... ]`}
            </div>
            <p>Then I took it and poured it into a histogram.</p>
            <p></p>
          </div>
        </div>

        <div>
          <Link href="/graph" scroll={false} ><a className={styles.link}>Time to visualize &rarr;</a></Link> <br />
        </div>
      </main>
    </div>
  )
}

export default Data
