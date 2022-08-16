import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Chart.module.css'
import { VictoryBar } from "victory"

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


const BarChartPage: NextPage = () => {
  const data = [
    {
      "country": "AD",
      "hot dog": 165,
      "hot dogColor": "hsl(54, 70%, 50%)",
      "burger": 167,
      "burgerColor": "hsl(147, 70%, 50%)",
      "sandwich": 41,
      "sandwichColor": "hsl(94, 70%, 50%)",
      "kebab": 91,
      "kebabColor": "hsl(228, 70%, 50%)",
      "fries": 63,
      "friesColor": "hsl(67, 70%, 50%)",
      "donut": 157,
      "donutColor": "hsl(6, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 29,
      "hot dogColor": "hsl(327, 70%, 50%)",
      "burger": 91,
      "burgerColor": "hsl(197, 70%, 50%)",
      "sandwich": 24,
      "sandwichColor": "hsl(155, 70%, 50%)",
      "kebab": 35,
      "kebabColor": "hsl(220, 70%, 50%)",
      "fries": 35,
      "friesColor": "hsl(229, 70%, 50%)",
      "donut": 74,
      "donutColor": "hsl(31, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 37,
      "hot dogColor": "hsl(195, 70%, 50%)",
      "burger": 56,
      "burgerColor": "hsl(141, 70%, 50%)",
      "sandwich": 8,
      "sandwichColor": "hsl(190, 70%, 50%)",
      "kebab": 63,
      "kebabColor": "hsl(101, 70%, 50%)",
      "fries": 19,
      "friesColor": "hsl(167, 70%, 50%)",
      "donut": 169,
      "donutColor": "hsl(241, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 51,
      "hot dogColor": "hsl(141, 70%, 50%)",
      "burger": 191,
      "burgerColor": "hsl(299, 70%, 50%)",
      "sandwich": 40,
      "sandwichColor": "hsl(146, 70%, 50%)",
      "kebab": 7,
      "kebabColor": "hsl(321, 70%, 50%)",
      "fries": 138,
      "friesColor": "hsl(215, 70%, 50%)",
      "donut": 145,
      "donutColor": "hsl(338, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 181,
      "hot dogColor": "hsl(97, 70%, 50%)",
      "burger": 148,
      "burgerColor": "hsl(221, 70%, 50%)",
      "sandwich": 66,
      "sandwichColor": "hsl(271, 70%, 50%)",
      "kebab": 106,
      "kebabColor": "hsl(87, 70%, 50%)",
      "fries": 146,
      "friesColor": "hsl(173, 70%, 50%)",
      "donut": 120,
      "donutColor": "hsl(243, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 24,
      "hot dogColor": "hsl(341, 70%, 50%)",
      "burger": 189,
      "burgerColor": "hsl(184, 70%, 50%)",
      "sandwich": 51,
      "sandwichColor": "hsl(245, 70%, 50%)",
      "kebab": 137,
      "kebabColor": "hsl(47, 70%, 50%)",
      "fries": 142,
      "friesColor": "hsl(2, 70%, 50%)",
      "donut": 159,
      "donutColor": "hsl(14, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 113,
      "hot dogColor": "hsl(110, 70%, 50%)",
      "burger": 162,
      "burgerColor": "hsl(250, 70%, 50%)",
      "sandwich": 32,
      "sandwichColor": "hsl(315, 70%, 50%)",
      "kebab": 127,
      "kebabColor": "hsl(98, 70%, 50%)",
      "fries": 8,
      "friesColor": "hsl(210, 70%, 50%)",
      "donut": 175,
      "donutColor": "hsl(249, 70%, 50%)"
    }
  ]
  const [realData, setRealData] = useState({})
  const realData2 = [{ "month": "2009/9", "number_of_tweets": 0 }, { "month": "2022/8", "number_of_tweets": 19 }, { "month": "2022/7", "number_of_tweets": 41 }, { "month": "2022/6", "number_of_tweets": 28 }, { "month": "2019/8", "number_of_tweets": 166 }, { "month": "2018/5", "number_of_tweets": 455 }, { "month": "2020/1", "number_of_tweets": 70 }, { "month": "2022/5", "number_of_tweets": 22 }, { "month": "2022/4", "number_of_tweets": 19 }, { "month": "2021/7", "number_of_tweets": 168 }, { "month": "2022/3", "number_of_tweets": 4 }, { "month": "2022/2", "number_of_tweets": 2 }, { "month": "2022/1", "number_of_tweets": 5 }, { "month": "2018/9", "number_of_tweets": 275 }, { "month": "2021/3", "number_of_tweets": 189 }, { "month": "2021/12", "number_of_tweets": 9 }, { "month": "2021/4", "number_of_tweets": 129 }, { "month": "2021/10", "number_of_tweets": 15 }, { "month": "2021/11", "number_of_tweets": 11 }, { "month": "2021/8", "number_of_tweets": 56 }, { "month": "2021/9", "number_of_tweets": 6 }, { "month": "2021/6", "number_of_tweets": 142 }, { "month": "2015/11", "number_of_tweets": 0 }, { "month": "2020/9", "number_of_tweets": 223 }, { "month": "2020/3", "number_of_tweets": 133 }, { "month": "2021/5", "number_of_tweets": 184 }, { "month": "2019/6", "number_of_tweets": 193 }, { "month": "2018/3", "number_of_tweets": 470 }, { "month": "2020/12", "number_of_tweets": 604 }, { "month": "2018/12", "number_of_tweets": 303 }, { "month": "2021/2", "number_of_tweets": 135 }, { "month": "2021/1", "number_of_tweets": 294 }, { "month": "2020/10", "number_of_tweets": 211 }, { "month": "2020/11", "number_of_tweets": 1189 }, { "month": "2018/11", "number_of_tweets": 634 }, { "month": "2020/2", "number_of_tweets": 84 }, { "month": "2019/4", "number_of_tweets": 304 }, { "month": "2019/10", "number_of_tweets": 88 }, { "month": "2020/7", "number_of_tweets": 293 }, { "month": "2019/11", "number_of_tweets": 63 }, { "month": "2019/5", "number_of_tweets": 179 }, { "month": "2020/8", "number_of_tweets": 188 }, { "month": "2019/9", "number_of_tweets": 90 }, { "month": "2020/4", "number_of_tweets": 84 }, { "month": "2020/6", "number_of_tweets": 291 }, { "month": "2019/3", "number_of_tweets": 245 }, { "month": "2017/3", "number_of_tweets": 4 }, { "month": "2016/7", "number_of_tweets": 6 }, { "month": "2016/6", "number_of_tweets": 1 }, { "month": "2016/5", "number_of_tweets": 3 }, { "month": "2016/2", "number_of_tweets": 1 }, { "month": "2020/5", "number_of_tweets": 166 }, { "month": "2016/8", "number_of_tweets": 3 }, { "month": "2019/12", "number_of_tweets": 84 }, { "month": "2016/12", "number_of_tweets": 2 }, { "month": "2018/6", "number_of_tweets": 462 }, { "month": "2019/7", "number_of_tweets": 137 }, { "month": "2017/1", "number_of_tweets": 2 }, { "month": "2019/2", "number_of_tweets": 250 }, { "month": "2018/7", "number_of_tweets": 432 }, { "month": "2018/1", "number_of_tweets": 524 }, { "month": "2018/2", "number_of_tweets": 299 }, { "month": "2017/7", "number_of_tweets": 597 }, { "month": "2017/6", "number_of_tweets": 96 }, { "month": "2014/10", "number_of_tweets": 0 }, { "month": "2018/10", "number_of_tweets": 338 }, { "month": "2019/1", "number_of_tweets": 328 }, { "month": "2012/6", "number_of_tweets": 0 }, { "month": "2017/2", "number_of_tweets": 4 }, { "month": "2018/8", "number_of_tweets": 487 }, { "month": "2015/12", "number_of_tweets": 0 }, { "month": "2016/10", "number_of_tweets": 6 }, { "month": "2018/4", "number_of_tweets": 409 }, { "month": "2017/11", "number_of_tweets": 580 }, { "month": "2015/8", "number_of_tweets": 1 }, { "month": "2016/9", "number_of_tweets": 7 }, { "month": "2015/1", "number_of_tweets": 0 }, { "month": "2017/12", "number_of_tweets": 283 }, { "month": "2015/4", "number_of_tweets": 0 }, { "month": "2017/4", "number_of_tweets": 9 }, { "month": "2017/5", "number_of_tweets": 8 }, { "month": "2016/1", "number_of_tweets": 0 }, { "month": "2017/10", "number_of_tweets": 757 }, { "month": "2017/8", "number_of_tweets": 656 }, { "month": "2017/9", "number_of_tweets": 627 }, { "month": "2010/4", "number_of_tweets": 0 }, { "month": "2015/6", "number_of_tweets": 0 }, { "month": "2016/3", "number_of_tweets": 0 }, { "month": "2016/4", "number_of_tweets": 0 }, { "month": "2013/5", "number_of_tweets": 0 }, { "month": "2016/11", "number_of_tweets": 1 }, { "month": "2015/2", "number_of_tweets": 0 }, { "month": "2010/10", "number_of_tweets": 0 }, { "month": "2011/9", "number_of_tweets": 0 }, { "month": "2013/12", "number_of_tweets": 0 }]
  useEffect(() => {
    getRealData().then((theData) => {
      setRealData(theData)
    })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Likes Graph</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles2.barchart}>
          <VictoryBar />
        </div>

        <Link href="/">go back</Link>
        <div >
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
      </main>
    </div>
  )
}

async function getRealData() {
  let response = await (await fetch("api/fetch-local-twitter-likes")).json()
  return response
}

async function loadLikes(setData: Dispatch<SetStateAction<string>>) {
  let response = await fetch("/api/get-locally-stored-likes")
  let responseJson = await response.json()
  setData(responseJson.data)
}

export default BarChartPage
