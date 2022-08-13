// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pathToFile = path.join(process.cwd(), "likes")
  fs.readFileSync(pathToFile, "utf-8", )
  res.status(200).json({ name: 'John Doe' })
}
