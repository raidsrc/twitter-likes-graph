import type { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, PropsWithoutRef, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Chart.module.css'
import { VictoryAxis, VictoryChart, VictoryHistogram, VictoryLabel, VictoryTheme } from 'victory'
import { NewTwitterLikeObject } from './api/fetch-local-twitter-likes'
import * as d3 from "d3"
import HeadComponent from '../components/HeadComponent'
// import MyResponsiveBar from '../components/nivo2'

type NewNewTwitterLikeObject = {
  id: string
  created_at: string
  text: string
  created_at_date: Date
}

const Graph: NextPage<Array<NewNewTwitterLikeObject>> = () => {
  const [realData, setRealData] = useState([{ id: "", created_at: "", text: "", created_at_date: new Date() }])
  useEffect(() => {
    // createGraph()
    // processData()
    // console.log(newData2)
    getRealData().then((theData) => {
      let newRealDataWithDate: Array<NewNewTwitterLikeObject> = []
      for (let i = 0; i < theData.length; i++) {
        let abc = {
          ...theData[i],
          created_at_date: new Date(theData[i].created_at)
        }
        newRealDataWithDate.push(abc)
      }
      setRealData(newRealDataWithDate)
    })
  }, [])

  // const d3TimeScaleFunction = d3.scaleTime().domain([new Date("2017-01-01T08:00Z"), new Date("2023-01-02T08:00Z")])

  const extentOfDates = d3.extent(realData, datum => datum.created_at_date)
  const d3TimeScaleFunction = d3.scaleTime().domain(extentOfDates as [Date, Date])
  const bins = d3.utcTicks(new Date(Date.UTC(2017, 0)), new Date(Date.UTC(2023, 0)), 20)
  return (
    <div className={styles.container}>
      <HeadComponent />

      <main className={styles.main}>
        <div className={styles.mainmain}>
          <Link href="/data" ><a className={styles.link}>&larr; Go back </a></Link> <br />
          <h1>Tweets Liked by <a className={styles.link} rel="noopener noreferrer" target="_blank" href="https://twitter.com/raidsrc">@raidsrc</a> Across The Years</h1>
          <div className={styles2.barchart}>
            <VictoryChart domainPadding={10} theme={VictoryTheme.material}
              padding={{ left: 70, right: 10, top: 20, bottom: 50 }}
            >
              {/* <VictoryLabel x={200} y={290} text="Year Tweeted" /> */}
              {/* <VictoryLabel x={10} y={180} text="Number of Tweets" angle={270}/> */}
              {/* <VictoryAxis tickValues={bins} tickFormat={(t: Date) => {String(t)}} /> */}
              {realData.length === 1 ? <VictoryLabel text="Loading..." x={165} y={150} style={{ fill: "#f4511e", fontSize: "20px" }} /> : <div />}
              <VictoryAxis dependentAxis tickValues={[500, 1000, 1500, 2000]} tickFormat={(tick: number) => `${tick.toLocaleString()}`} label="Number of Tweets Liked" axisLabelComponent={<VictoryLabel dy={-40} />} />
              <VictoryAxis tickValues={bins} tickCount={6} tickFormat={(tick: Date) => `${(new Date(tick)).getFullYear() + 1}`} label="When the Tweet was Twaught" axisLabelComponent={<VictoryLabel dy={20} />} />
              <VictoryHistogram data={realData} x={"created_at_date"} bins={bins} />
            </VictoryChart>
          </div>
          <div className={styles.textBlurb}>
            {/* <ul>
              <li> The x-axis represents 3-month periods as bins. Years are labeled.</li>
              <li> The y-axis represents the number of tweets @raidsrc liked during a given time period. </li>
            </ul> */}
            <p>Histogram component provided by <a href="https://github.com/FormidableLabs/victory" className={styles.link}>Victory</a>.</p>
            <p>{`I decided to use Twitter likes/favorites as a proxy for Twitter usage. I figure that Twitter does a good job at feeding you timely and relevant tweets, so the tweets you see during a certain time period were probably (mostly) created during that time period. Therefore, if you like a bunch of tweets that were created at a certain time, you probably used Twitter more at that time. A pretty reasonable assumption in my view. I chose likes/favorites over retweets or tweets made because I made this histogram to inspect my own Twitter usage and I never, ever retweet or publish my own tweets.`}</p>
            <p>{`So, for instance, I liked around 1,300 tweets that were created in the first quarter of 2018. According to my assumption, this would indicate that I spent more time on Twitter in the first quarter of 2018 than I did in the first quarter of 2019, as I've only liked around 800 tweets from the first quarter of 2019. The validity of my conclusion rests on that assumption, but like I said, it seems a pretty reasonable assumption to me.`} </p>
            <p>As you can see, I was a Twitter addict during late high school and early college (late 2017 - early 2019), chilled out a bit as college went on (2019 - early 2020), returned to Twitter in full force when lockdown hit because of course I did (mid-2020 - 2021), and am now weaning myself off the constant Twitter usage (late 2021 - 2022). </p>
            <p>{"That massive spike that occurred during the last 3 months of 2020 is crazy. I remember spending straight hours endlessly scrolling on Twitter back then. It matches up with a sharp decline in my mental health that hit me pretty hard during the pandemic. My mental health throughout the entire pandemic was abysmal, but the later months of 2020 were the worst of times. Stuck at home. Bored as hell. Fed up with Zoom university. Especially hated some of the classes I was taking at the time (Organic Chemistry and Software Development in C, disgusting). Tired of arguing with my parents. It's cold and cloudy outside. Days are short and nights are long. It's so dark out all the time. Haven't seen my friends in a while. Generally miserable. Worried about the state of the world. Worried about my own future after I graduate college. And much more. I'm better now, but damn. It was rough back then. You know how when you're depressed, staring at your phone will only make you feel worse? Someone should've told me that back then. I just kept using Twitter, kept doomscrolling, and kept hitting new lows. Big mistake."} </p>
            <p>{`I have been actively trying to limit screentime starting from 2021 onward. I've adopted the view that social media is just pointless. Completely pointless. And that life is better lived offscreen. Unfortunately, this view of mine is nothing but a faraway dream now, since it's impossible to do just about anything in today's society without interfacing with a screen at some point. But I try to go screenless whenever possible, if only for a short time. I like saving my eyes and my sanity. `}</p>
          </div>
        </div>
          <Link href="/wrap" scroll={false}><a className={styles.link}>{"Aight cool glad we're done "}&rarr;</a></Link>
      </main>
    </div>
  )
}

async function getRealData() {
  let domain = ""
  if (process.env.NODE_ENV === "development") {
    domain = "http://localhost:3000"
  } else {
    domain = "https://twitter-likes-graph-raidsrc.vercel.app"
  }
  
  let response: Array<NewTwitterLikeObject> = await (await fetch(`${domain}/api/fetch-local-twitter-likes`)).json()
  return response
}

export default Graph

// export async function getStaticProps() {
//   const data = await getRealData()
//   // let newRealDataWithDate: Array<NewNewTwitterLikeObject> = []
//   // for (let i = 0; i < props.length; i++) {
//   //   let abc = {
//   //     ...props[i],
//   //     created_at_date: new Date(props[i].created_at)
//   //   }
//   //   newRealDataWithDate.push(abc)
//   // }
//   // return { props: { data: newRealDataWithDate } }
//   return { props: { data } }
// }

