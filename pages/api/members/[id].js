import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) 
{
    let { id } = req.query
    const member = await prisma.members.findUnique({where: {id: Number(id)}})
    res.status(200).json(member)
}