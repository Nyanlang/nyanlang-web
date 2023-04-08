import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://cms.nyanlang.org/api/version", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "bearer " + process.env.CMS_API_KEY
    }
  })

  if (!response.ok) {
    return res.status(response.status).json({error: "Failed to fetch version"})
  }

  const data = await response.json()

  return res.status(response.status).json({version: data.data.attributes.value})
}