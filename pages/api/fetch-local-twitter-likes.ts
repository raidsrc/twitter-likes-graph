// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"
import type { reformed } from "./likes-combiner"

// this route sends back a response that contains all the likes. all 17.2k+ of em. in json as an array of each like object. 

export type NewTwitterLikeObject = {
  id: string
  created_at: string 
  text: string 
}
type fuck = {
  month: string 
  number_of_tweets: number 
}
type fuck2 = {
  [date: string] : number
}

function prepareForGraphing (list_of_tweets: Array<NewTwitterLikeObject>) {
  // get array of twitter likes. loop thru and see how many there are for a given month. return array with objects that look like {time_period: x, number_of_tweets: y}
  let lol = []
  // let lolol = {
  //   "2021/12": 3
  // }
  let lolol: fuck2 = {}
  list_of_tweets.forEach(element => {
    let date = new Date(element.created_at)
    let dateString = String(date.getFullYear()) + "/" + String(date.getMonth()+1)
    if (Object.keys(lolol).includes(dateString)) {
      lolol[dateString] += 1
    } else {
      lolol[dateString] = 0
    }
  })
  for (const [month, tweets] of Object.entries(lolol)) {
    lol.push({month: month, number_of_tweets: tweets})
  }
  return lol
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<fuck>>
) {
  
  const pathToLikesFile = path.join(process.cwd(), "likes", "likes-all-complete.json")
  const likes = fs.readFileSync(pathToLikesFile, "utf-8")
  const likesJson: reformed = JSON.parse(likes)
  let newShit = []
  for (const [key, value] of Object.entries(likesJson)) {
    newShit.push({
      id: key,
      ...value
    })
  }
  const graphThis = prepareForGraphing(newShit)

  res.status(200).json(graphThis)

}
