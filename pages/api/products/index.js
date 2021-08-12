import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) 
{
    const products = await prisma.products.findMany({
        orderBy: {
            id: "desc"
        }
    })
    res.status(200).json(products)
}