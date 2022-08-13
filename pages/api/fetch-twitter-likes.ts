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

type TwitterLikeObject = {
  created_at: Date,
  id: string,
  text: string
}

async function twitterFetchLoop(pages: Number, fetchInfo: { bearerToken?: string, endpoint: string }) {
  let { endpoint, bearerToken } = fetchInfo
  let paginationTokenQueryKeyAndValue: string = ""
  let allLikes: Array<TwitterLikeObject> = []

  for (let i = 0; i < pages; i++) {
    if (paginationTokenQueryKeyAndValue === "naw we done") {
      break
    }
    let completeEndpoint = endpoint + paginationTokenQueryKeyAndValue
    try {
      let response = await fetch(completeEndpoint, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + bearerToken,
        }
      })
      let responseJson: TwitterResponse = await response.json()
      allLikes.push(...responseJson.data)
      if (responseJson.meta.next_token) {
        paginationTokenQueryKeyAndValue = `&pagination_token=${responseJson.meta.next_token}`
      } else {
        paginationTokenQueryKeyAndValue = "naw we done"
      }
    } catch (error) {
      console.error(error)
    }
  }
  return allLikes
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
  const pages_to_fetch = Number(query.pages_to_fetch)

  const yeet = await twitterFetchLoop(pages_to_fetch, fetchInfo)

  const yeetString = JSON.stringify(yeet)
  const pathToFile = path.join(process.cwd(), "json")
  // try {
  //   fs.writeFileSync(pathToFile + "likes.txt", yeetString)
  // } catch (error) {
  //   console.error(error)
  // }
  
  let yeetString2 = "{"
  for (let i = 0; i < yeet.length; i++) {
    yeetString2 += `"${String(i)}":` + JSON.stringify(yeet[i])
    if (i !== yeet.length - 1) {
      yeetString2 += ", \n"
    }
  }
  yeetString2 += "}"
  // for (let i = 0; i < yeet.length; i++) {
  //   yeetString2 += `{"id": "${String(yeet[i].id)}", "created_at": "${String(yeet[i].created_at)}", "text": "${String(yeet[i].text)}"}\n`
  // }

  try {
    fs.writeFileSync(pathToFile + "/likes.json", yeetString2)
  } catch (error) {
    console.error(error)
  }


  
  res.status(200).json({ ...yeet })

}
