// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

async function fetchLikes() {
  const bearerToken = process.env.BEARER_TOKEN
  const userId = "828671753299783680"
  let paginationToken = ""
  let paginationTokenQueryKeyAndValue = `&pagination_token=${paginationToken}`
  const endpoint = `https://api.twitter.com/2/users/${userId}/liked_tweets?tweet.fields=created_at`

  try {
    let response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + bearerToken,
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive"
      }
    })
    let responseJson = await response.json()
    console.log(responseJson)
  } catch (error) {
    console.error(error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const bearerToken = process.env.BEARER_TOKEN
  const userId = "828671753299783680"
  let paginationToken = ""
  let paginationTokenQueryKeyAndValue = `&pagination_token=${paginationToken}`
  const endpoint = `https://api.twitter.com/2/users/${userId}/liked_tweets?tweet.fields=created_at`

  try {
    let response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + bearerToken,
      }
    })
    let responseJson = await response.json()
    res.status(200).json({ ...responseJson })
  } catch (error) {
    console.error(error)
  }
  
}
