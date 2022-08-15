// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"
import type { reformed } from "./likes-combiner"

// this route sends back a response that contains all the likes. all 17.2k+ of em. in json with shape reformed. 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<reformed>
) {
  
  const pathToLikesFile = path.join(process.cwd(), "likes", "likes-all-complete.json")
  const likes = fs.readFileSync(pathToLikesFile, "utf-8")
  const likesJson: reformed = JSON.parse(likes)

  res.status(200).json(likesJson)

}
