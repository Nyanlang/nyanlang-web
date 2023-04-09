import {NextApiRequest, NextApiResponse} from "next";
import StrapiQueryGenerator from "@/utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { api_id, page },
  } = req

  let query = new StrapiQueryGenerator(`https://cms.nyanlang.org/api/${api_id}`)
      .populate("post_tags", ["0"])
      .sortBy("publishedAt", "desc")
      .sortBy("title")
      .filter_fields(["title", "createdAt", "updatedAt", "publishedAt", "post_tags"])
      .paginate(page ? parseInt(typeof page === "string" ? page : page[0]) : 1, 10)
      .toString();

  const response = await fetch(query, {
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