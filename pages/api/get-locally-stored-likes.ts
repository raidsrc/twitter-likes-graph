// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type Response = {
  data: string
}

export const config = {
  api: {
    responseLimit: "6mb",
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const pathToLikesDir = path.join(process.cwd(), "likes")
  let data = "" 
  for (let i = 1; i < 7; i++) {
    data += fs.readFileSync(pathToLikesDir + `/likesnew${i}.json`, "utf-8")
  }
  res.status(200).json({ data: data })
}
