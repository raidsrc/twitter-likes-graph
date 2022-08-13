// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type TwitterResponse = {
  data: Array<Object>,
  meta: {
    result_count: Number,
    next_token: string
  }
}

type FetchLikesQuery = {
  pages_to_fetch?: string
}

async function twitterFetchLoop(pages: Number, fetchInfo: { bearerToken?: string, endpoint: string }) {
  let { endpoint, bearerToken } = fetchInfo
  let paginationTokenQueryKeyAndValue: string = ""
  let allLikes: Array<Object> = []

  for (let i = 0; i < pages; i++) {
    let completeEndpoint = endpoint + paginationTokenQueryKeyAndValue
    try {
      let response = await fetch(completeEndpoint, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + bearerToken,
        }
      })
      let responseJson: TwitterResponse = await response.json()
      allLikes.push(responseJson.data)
      paginationTokenQueryKeyAndValue = `&pagination_token=${responseJson.meta.next_token}`
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
  res.status(200).json({ ...yeet })

}
