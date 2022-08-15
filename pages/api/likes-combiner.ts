// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from "path"
import type { TwitterLikeObject } from "./fetch-twitter-likes"

type Data = {
  status: string
}

type LikesObjectThing = {
  [key: string]: TwitterLikeObject | string
  next_token: string
}

export type reformed = {
  [key: number] : {
    created_at: string
    text: string 
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const currentDir = path.join(process.cwd(), "likes")
  let dataFromFile = ""
  let newObject: reformed = {}
  for (let i = 1; i < 7; i++) {
    dataFromFile = fs.readFileSync(currentDir + `/likesnew${i}.json`, "utf-8")
    let dataJson: LikesObjectThing = JSON.parse(dataFromFile)
    Object.entries(dataJson).forEach((element) => {
      if (element[0] !== "next_token" && typeof element[1] === "object") {
        newObject[element[1].id] = {"created_at": element[1].created_at, "text": element[1].text}
      }
    });
  }
  let newObjectStringified = JSON.stringify(newObject)
  try {
    fs.writeFileSync(currentDir + "/likes-all.json", newObjectStringified)
    res.status(200).json({ status: 'success' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ status: "failure" })
  }
}


/***
 * { "328947279347923479": { created at : 234, text: "asdfasdf" },
 *   "284783984732223065": { created at : 232, text: "lkjhgf" },
 * }
 * 
 * 
 */