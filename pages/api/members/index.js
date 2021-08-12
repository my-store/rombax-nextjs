import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) 
{
    const members = await prisma.members.findMany({
        orderBy: {
            id: "desc"
        }
    })
    res.status(200).json(members)
}