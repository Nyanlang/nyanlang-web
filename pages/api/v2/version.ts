import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const client = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const version = await client.configuration.findUnique({
        where: {
            name: "version"
        }
    })
    if (!version) return res.status(500).json({error: "Failed to fetch version"})
    res.status(200).json({version: version?.value})
}