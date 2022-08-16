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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<NewTwitterLikeObject>>
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

  res.status(200).json(newShit)

}
