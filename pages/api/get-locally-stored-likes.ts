// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type Response = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  console.log("hi")
  const pathToFile = path.join(process.cwd(), "likes", "likesnew1.json")
  const data = fs.readFileSync(pathToFile, "utf-8")
  res.status(200).json({ data: data })
}
