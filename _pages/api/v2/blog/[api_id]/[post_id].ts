import { NextApiRequest, NextApiResponse } from 'next'
import StrapiQueryGenerator from '@/utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { api_id, post_id },
    } = req;

    let query = new StrapiQueryGenerator(`https://cms.nyanlang.org/api/${api_id}/${post_id}`)

    const response = await fetch(query.toString(), {
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