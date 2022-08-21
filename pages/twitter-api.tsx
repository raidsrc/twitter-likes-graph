import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'
import postman from "../public/postman.png"
import HeadComponent from '../components/HeadComponent'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div className={styles.mainmain}>
          <Link href="/why" ><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>Fetching data from Twitter</h1>
          <div className={styles.textBlurb}>
            <div className={styles["postman-image-text-container"]}>
              <div className={styles["text-next-to-postman-image"]}>
                <p>
                  I started sending requests to the Twitter API for my liked tweets. I did some testing in Postman first.
                </p>
              </div>
              <div className={styles["postman-image-div"]}>
                <Image alt='Postman icon' src={postman} ></Image>
              </div>
            </div>
            <div className={styles.code}>https://api.twitter.com/2/users/████████████████████/liked_tweets?pagination_token=█████████████████████████████████████&tweet.fields=created_at</div>
            <p>{"The Twitter API's liked tweets endpoint returns one page at a time. One page has around 100 liked tweets on it. Pages are connected by pagination tokens. Each page of tweets returned from the endpoint has two pagination tokens on it. One that points to the previous page and one that points to the next page. To get from one page to another, you must use the pagination token you get from one page and make a new request with a query parameter containing that token. Your new request will return the next page."}</p>
            <p>To fetch as many tweets as I could at a time, I wrote a loop that fetched a page, then used the pagination token from that page to fetch the next page ad infinitum. Unfortunately, Twitter rate-limits you to 75 requests per 15-minute period, so I had to make my requests, wait, and then go for it again after the cooldown. I have almost 20k liked tweets. This took a while.</p>
            <div className={styles.code}>
              GET /2/users/████████████████████/liked_tweets?pagination_token=█████████████████████████████████████&tweet.fields=created_at HTTP/1.1 <br />
              Authorization: Bearer AAAAAAAAAA███████████████████████████████████████████████████████████████████████████████ <br />
              User-Agent: PostmanRuntime/7.29.2 <br />
              Accept: */* <br />
              Postman-Token: ████████████████████████████████████████ <br />
              Host: api.twitter.com <br />
              Accept-Encoding: gzip, deflate, br <br />
              Connection: keep-alive <br />
              Cookie: ████████████████████████████ ███████████████████████████████ ███████████████████████████████████ █████████████████████████ <br />
            </div>
            <p>{`I used the bearer token from one of my projects on my free tier Twitter Developer account to authenticate myself. That's the header that says "Authorization: Bearer AAAAAAAAAA███████████████████████████████████████████████████████████████████████████████.`}</p>
            <p>Not gonna share the actual bearer token with you, obviously.</p>
            <p>After extracting all that data, it was time to transform it.</p>
          </div>
        </div>

        <div>
          <Link href="/data" ><a className={styles.link}>Got my data &rarr;</a></Link> <br />
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
