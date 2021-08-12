import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) 
{
    let { id } = req.query
    const product = await prisma.products.findUnique({where: {id: Number(id)}})
    res.status(200).json(product)
}