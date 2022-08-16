import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, PropsWithoutRef, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Chart.module.css'
import { VictoryAxis, VictoryChart, VictoryHistogram } from 'victory'
import { NewTwitterLikeObject } from './api/fetch-local-twitter-likes'
import * as d3 from "d3"
// import MyResponsiveBar from '../components/nivo2'

type NewNewTwitterLikeObject = {
  id: string
  created_at: string 
  text: string 
  created_at_date: Date
}
interface Props {

}

const GraphPage: NextPage = ( props ) => {
  const [realData, setRealData] = useState([{a:1},{a:2}])

  const realData2 = [{ "month": "2009/9", "number_of_tweets": 0 }, { "month": "2022/8", "number_of_tweets": 19 }, { "month": "2022/7", "number_of_tweets": 41 }, { "month": "2022/6", "number_of_tweets": 28 }, { "month": "2019/8", "number_of_tweets": 166 }, { "month": "2018/5", "number_of_tweets": 455 }, { "month": "2020/1", "number_of_tweets": 70 }, { "month": "2022/5", "number_of_tweets": 22 }, { "month": "2022/4", "number_of_tweets": 19 }, { "month": "2021/7", "number_of_tweets": 168 }, { "month": "2022/3", "number_of_tweets": 4 }, { "month": "2022/2", "number_of_tweets": 2 }, { "month": "2022/1", "number_of_tweets": 5 }, { "month": "2018/9", "number_of_tweets": 275 }, { "month": "2021/3", "number_of_tweets": 189 }, { "month": "2021/12", "number_of_tweets": 9 }, { "month": "2021/4", "number_of_tweets": 129 }, { "month": "2021/10", "number_of_tweets": 15 }, { "month": "2021/11", "number_of_tweets": 11 }, { "month": "2021/8", "number_of_tweets": 56 }, { "month": "2021/9", "number_of_tweets": 6 }, { "month": "2021/6", "number_of_tweets": 142 }, { "month": "2015/11", "number_of_tweets": 0 }, { "month": "2020/9", "number_of_tweets": 223 }, { "month": "2020/3", "number_of_tweets": 133 }, { "month": "2021/5", "number_of_tweets": 184 }, { "month": "2019/6", "number_of_tweets": 193 }, { "month": "2018/3", "number_of_tweets": 470 }, { "month": "2020/12", "number_of_tweets": 604 }, { "month": "2018/12", "number_of_tweets": 303 }, { "month": "2021/2", "number_of_tweets": 135 }, { "month": "2021/1", "number_of_tweets": 294 }, { "month": "2020/10", "number_of_tweets": 211 }, { "month": "2020/11", "number_of_tweets": 1189 }, { "month": "2018/11", "number_of_tweets": 634 }, { "month": "2020/2", "number_of_tweets": 84 }, { "month": "2019/4", "number_of_tweets": 304 }, { "month": "2019/10", "number_of_tweets": 88 }, { "month": "2020/7", "number_of_tweets": 293 }, { "month": "2019/11", "number_of_tweets": 63 }, { "month": "2019/5", "number_of_tweets": 179 }, { "month": "2020/8", "number_of_tweets": 188 }, { "month": "2019/9", "number_of_tweets": 90 }, { "month": "2020/4", "number_of_tweets": 84 }, { "month": "2020/6", "number_of_tweets": 291 }, { "month": "2019/3", "number_of_tweets": 245 }, { "month": "2017/3", "number_of_tweets": 4 }, { "month": "2016/7", "number_of_tweets": 6 }, { "month": "2016/6", "number_of_tweets": 1 }, { "month": "2016/5", "number_of_tweets": 3 }, { "month": "2016/2", "number_of_tweets": 1 }, { "month": "2020/5", "number_of_tweets": 166 }, { "month": "2016/8", "number_of_tweets": 3 }, { "month": "2019/12", "number_of_tweets": 84 }, { "month": "2016/12", "number_of_tweets": 2 }, { "month": "2018/6", "number_of_tweets": 462 }, { "month": "2019/7", "number_of_tweets": 137 }, { "month": "2017/1", "number_of_tweets": 2 }, { "month": "2019/2", "number_of_tweets": 250 }, { "month": "2018/7", "number_of_tweets": 432 }, { "month": "2018/1", "number_of_tweets": 524 }, { "month": "2018/2", "number_of_tweets": 299 }, { "month": "2017/7", "number_of_tweets": 597 }, { "month": "2017/6", "number_of_tweets": 96 }, { "month": "2014/10", "number_of_tweets": 0 }, { "month": "2018/10", "number_of_tweets": 338 }, { "month": "2019/1", "number_of_tweets": 328 }, { "month": "2012/6", "number_of_tweets": 0 }, { "month": "2017/2", "number_of_tweets": 4 }, { "month": "2018/8", "number_of_tweets": 487 }, { "month": "2015/12", "number_of_tweets": 0 }, { "month": "2016/10", "number_of_tweets": 6 }, { "month": "2018/4", "number_of_tweets": 409 }, { "month": "2017/11", "number_of_tweets": 580 }, { "month": "2015/8", "number_of_tweets": 1 }, { "month": "2016/9", "number_of_tweets": 7 }, { "month": "2015/1", "number_of_tweets": 0 }, { "month": "2017/12", "number_of_tweets": 283 }, { "month": "2015/4", "number_of_tweets": 0 }, { "month": "2017/4", "number_of_tweets": 9 }, { "month": "2017/5", "number_of_tweets": 8 }, { "month": "2016/1", "number_of_tweets": 0 }, { "month": "2017/10", "number_of_tweets": 757 }, { "month": "2017/8", "number_of_tweets": 656 }, { "month": "2017/9", "number_of_tweets": 627 }, { "month": "2010/4", "number_of_tweets": 0 }, { "month": "2015/6", "number_of_tweets": 0 }, { "month": "2016/3", "number_of_tweets": 0 }, { "month": "2016/4", "number_of_tweets": 0 }, { "month": "2013/5", "number_of_tweets": 0 }, { "month": "2016/11", "number_of_tweets": 1 }, { "month": "2015/2", "number_of_tweets": 0 }, { "month": "2010/10", "number_of_tweets": 0 }, { "month": "2011/9", "number_of_tweets": 0 }, { "month": "2013/12", "number_of_tweets": 0 }]
  useEffect(() => {
    // createGraph()
    // processData()
    // console.log(newData2)
    let newRealDataWithDate: Array<NewNewTwitterLikeObject> = []
    let newRealDataJustDate: Array<{date: Date}> = []
    getRealData().then((theData) => {
      for (let i = 0; i < theData.length; i++) {
        let abc = {
          ...theData[i],
          created_at_date: new Date(theData[i].created_at)
        }
        let def = {date: new Date(theData[i].created_at)}
        newRealDataWithDate.push(abc)
        newRealDataJustDate.push(def)
      }
      console.log(newRealDataWithDate[420])
      console.log(newRealDataJustDate[420])
      setRealData(newRealDataWithDate)
    })
  }, [])
  
  const d3TimeScaleFunction = d3.scaleTime().domain([new Date("2017-01-01T08:00Z"), new Date("2023-01-02T08:00Z")])
  const bins = d3TimeScaleFunction.ticks(d3.utcMonth)
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Likes Graph</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles2.barchart}>
          <VictoryChart domainPadding={20}>
            {/* <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} /> */}
            {/* <VictoryAxis dependentAxis tickFormat={(x: any) => (`$${x / 10}k`)} /> */}
            <VictoryHistogram data={realData} x={"created_at_date"} bins={bins}/>
          </VictoryChart>
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
  let response: Array<NewTwitterLikeObject> = await (await fetch("api/fetch-local-twitter-likes")).json()
  return response
}

async function loadLikes(setData: Dispatch<SetStateAction<string>>) {
  let response = await fetch("/api/get-locally-stored-likes")
  let responseJson = await response.json()
  setData(responseJson.data)
}



export default GraphPage

// export async function getStaticProps() {
//   let response: Array<NewTwitterLikeObject> = await (await fetch("api/fetch-local-twitter-likes")).json()
//   return {
//     props: {
//       response
//     }
//   }
// }