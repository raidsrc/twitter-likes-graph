import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Chart.module.css'
import * as d3 from "d3"
import "d3-time-format"
const parseTime = d3.timeParse("%d-%b-%y");
import BarChart from "../components/Chart1"
import BarChart2 from '../components/Chart2'
import Histogram from '../components/Histogram'
import D3BarChart from "../components/D3BarChart"
import D3Histogram from "../components/D3Histogram"
import { MyResponsiveBar } from "../components/nivo2"

const GraphPage: NextPage = () => {
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
  const data2 = [
    { "id": "3768167846", "created_at": "2009-09-04T23:36:04.000Z", "text": "hey guys" }, 
    { "id": "1558503587109560320", "created_at": "2022-08-13T17:19:45.000Z", "text": "@LiquidHbox woah that sounds hard!!" }, 
    { "id": "1557965329938239488", "created_at": "2022-08-12T05:40:54.000Z", "text": "so this is basically what they're up to these days, right?\n\n#homestuck #home22tuck https://t.co/UazESxBC55" }, 
    { "id": "1557929226376024066", "created_at": "2022-08-12T03:17:27.000Z", "text": "homestuck if it was awesome https://t.co/ZEng6S7Zkm" }, 
    { "id": "1557995434651426816", "created_at": "2022-08-12T07:40:32.000Z", "text": "Motherfuckers out here named Larry https://t.co/S7rNrCgvmA" }, 
    { "id": "1557751702475968514", "created_at": "2022-08-11T15:32:02.000Z", "text": "one of the dirty secrets of silicon valley is called the infinite scroll which caused a massive boom in usage in every single product. \n\nno one talks about it because it’s better ux but it’s one of the most psychologically destructive things to ever happen—a blip on the radar." }, 
    { "id": "1557832075050307584", "created_at": "2022-08-11T20:51:24.000Z", "text": "EVO was better when there was melee" }, 
    { "id": "1557819019725602816", "created_at": "2022-08-11T19:59:31.000Z", "text": "imo rankings were really good this season https://t.co/OFZrcG8emS" }, 
    { "id": "1557536662866894848", "created_at": "2022-08-11T01:17:32.000Z", "text": "Heartwarming: After a close set, Hungrybox assembles a chair for Jmook https://t.co/V5dYPMHs3X" }, 
    { "id": "1557161116962131969", "created_at": "2022-08-10T00:25:15.000Z", "text": "this is all you need to know about sf https://t.co/96iULpwMzZ" }, 
    { "id": "1556735221726433281", "created_at": "2022-08-08T20:12:54.000Z", "text": "i’m so deep in the industry, name a band and i’ll drop a truth bomb about them" }, 
    { "id": "1556823680524722176", "created_at": "2022-08-09T02:04:24.000Z", "text": "@hourly_shitpost https://t.co/DV7LQ761yv" }, 
    { "id": "1556720959532412929", "created_at": "2022-08-08T19:16:13.000Z", "text": "Shoutout to my boys and #wavedash2022 ! Awesome bracket, sweet location for the venue, and really good management despite tons of issues! Amazing first tourney! Can't wait to come back next year." }, 
    { "id": "1556612698082721792", "created_at": "2022-08-08T12:06:02.000Z", "text": "@69PercentHats https://t.co/NO2YXOL5Yl" }, 
    { "id": "1555736131266052096", "created_at": "2022-08-06T02:02:52.000Z", "text": "There is no ‘teacher shortage’. There are thousands of qualified experiences teachers who are no longer teaching. There’s a shortage of respect and proper compensation for teachers allowing them to actually teach." }, 
    { "id": "1555378534734073857", "created_at": "2022-08-05T02:21:54.000Z", "text": "https://t.co/yyIviizN2O" }, 
    { "id": "1554893155765432320", "created_at": "2022-08-03T18:13:11.000Z", "text": "@firefox HoTTPocketSandwich" }, 
    { "id": "1554901941326577670", "created_at": "2022-08-03T18:48:06.000Z", "text": "@VaushV @AndrewYang I like my politics unpolitical, back in the good ol day everyone was cool then they went and made politics political and woke, smh" }, 
    { "id": "1554815543516938242", "created_at": "2022-08-03T13:04:47.000Z", "text": "Laid awake for 6 hours straight for no reason i hate existing" }, 
    { "id": "1554149591955668992", "created_at": "2022-08-01T16:58:32.000Z", "text": "samurai champloo - battle cry (2005) https://t.co/SeKLOCfhsD" }, 
    { "id": "1554322449751228417", "created_at": "2022-08-02T04:25:24.000Z", "text": "SUPER SMASH BROS MELEE - SOULS OF THE DAMNED SENTENCED TO ROAMING THE LANDS FOR ALL ETERNITY https://t.co/foYFG1mHS6" }, 
    { "id": "1553607424551968770", "created_at": "2022-07-31T05:04:09.000Z", "text": "@jessicahkim i-" }, 
    { "id": "1553571011550973953", "created_at": "2022-07-31T02:39:27.000Z", "text": "https://t.co/jCWiH6JTqJ" }, 
    { "id": "1553778828929126405", "created_at": "2022-07-31T16:25:15.000Z", "text": "@longbeachgriffy https://t.co/BSIvYvgeNY" }, 
    { "id": "1546599653554229252", "created_at": "2022-07-11T20:57:46.000Z", "text": "Why the fuck do y'all not listen? https://t.co/kewHuL2AE2" }, 
    { "id": "1553092385139220481", "created_at": "2022-07-29T18:57:34.000Z", "text": "i'll show you a shipping dynamic https://t.co/BcgterO36K" }
  ]
  let newData2 = []
  const processData = () => {
    for (const element of data2) {
      let year = (new Date(element.created_at)).getFullYear()
      newData2.push({year_tweeted: year, ...element})
    }
  }
  useEffect(() => {
    // createGraph()
    processData()
    console.log(newData2)
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
          <MyResponsiveBar data={newData2} />
        </div>

        <Link href="/">go back</Link>
        <div >
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
      </main>


    </div>
  )
}

async function loadLikes(setData: Dispatch<SetStateAction<string>>) {
  let response = await fetch("/api/get-locally-stored-likes")
  let responseJson = await response.json()
  setData(responseJson.data)
}

export default GraphPage
