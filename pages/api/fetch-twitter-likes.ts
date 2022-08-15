// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type TwitterResponse = {
  data: Array<TwitterLikeObject>,
  meta: {
    result_count: Number,
    next_token: string
  }
}

type FetchLikesQuery = {
  pages_to_fetch?: string
}

export type TwitterLikeObject = {
  created_at: string,
  id: number,
  text: string
}

async function twitterFetchLoop(pages: Number, fetchInfo: { bearerToken?: string, endpoint: string }) {
  let { endpoint, bearerToken } = fetchInfo
  let tokenWeLeftOffOn: string = ""
  let paginationTokenQueryKeyAndValue: string = "&pagination_token=7140dibdnow9c7btw423hmsc7g2ajdp76bq2oeem5ri9j"
  let allLikes: Array<TwitterLikeObject> = []

  for (let i = 0; i < pages; i++) {
    let completeEndpoint = endpoint + paginationTokenQueryKeyAndValue
    try {
      let response = await fetch(completeEndpoint, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + bearerToken,
        }
      })
      console.log(response.headers)
      let responseJson: TwitterResponse = await response.json()
      console.log(responseJson)
      allLikes.push(...responseJson.data)
      paginationTokenQueryKeyAndValue = `&pagination_token=${responseJson.meta.next_token}`
      tokenWeLeftOffOn = responseJson.meta.next_token
    } catch (error) {
      console.error(error)
    }
  }
  return {allLikes, tokenWeLeftOffOn}
}

// let's map out how this is going to work. first i make the first request to get the first set of liked tweets. from that response i get the next token for the next page. i think i'll set a variable to &pagination_token plus the token and change it every iteration. i'll append that string to the end of the endpoint and shoot out the request to twitter. that ought to do it. 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object[]>
) {
  const bearerToken = process.env.BEARER_TOKEN
  const userId = "828671753299783680"
  const tweetFields = "tweet.fields=created_at"
  const queryString = `?${tweetFields}`
  const endpoint = `https://api.twitter.com/2/users/${userId}/liked_tweets${queryString}`

  const fetchInfo = {
    bearerToken: bearerToken,
    endpoint: endpoint
  }

  const query: FetchLikesQuery = req.query
  // const pages_to_fetch = Number(query.pages_to_fetch)
  const pages_to_fetch = 70

  const yeet = await twitterFetchLoop(pages_to_fetch, fetchInfo)

  const yeetString = JSON.stringify(yeet)
  const pathToFile = path.join(process.cwd(), "json")
  // try {
  //   fs.writeFileSync(pathToFile + "likes.txt", yeetString)
  // } catch (error) {
  //   console.error(error)
  // }

  let yeetString2 = "{"
  for (let i = 0; i < yeet.allLikes.length; i++) {
    yeetString2 += `"${String(i)}":` + JSON.stringify(yeet.allLikes[i])
    if (i !== yeet.allLikes.length - 1) {
      yeetString2 += ", \n"
    }
  }
  yeetString2 += `, \n"next_token": "${yeet.tokenWeLeftOffOn}"}`
  // for (let i = 0; i < yeet.length; i++) {
  //   yeetString2 += `{"id": "${String(yeet[i].id)}", "created_at": "${String(yeet[i].created_at)}", "text": "${String(yeet[i].text)}"}\n`
  // }

  try {
    fs.writeFileSync(pathToFile + "/likesnew7.json", yeetString2)
  } catch (error) {
    console.error(error)
  }



  res.status(200).json({ ...yeet.allLikes })

}
