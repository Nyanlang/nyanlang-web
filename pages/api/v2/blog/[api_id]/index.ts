import {NextApiRequest, NextApiResponse} from "next";

interface blogPost {
  id: string,
  attributes: {
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { api_id, page },
  } = req

  console.log(api_id, page);

  const response = await fetch(`https://cms.nyanlang.org/api/${api_id}?sort[0]=publishedAt%3Adesc&sort[1]=title%3Aasc&pagination[page]=${page ? page : 1}&pagination[pageSize]=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "bearer " + process.env.CMS_API_KEY,
    }
  })
  const data = await response.json()

  if (!response.ok) {
    return res.status(response.status).json(data)
  }

  res.status(response.status).json(data)
}