import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) 
{
    if(req.method === "POST") {
        try {
            await prisma.members.create({
                data: JSON.parse(req.body)
            })
            res.status(200).json({
                status: 1,
                message: "Product deleted"
            })
        }
        catch(error) {
            res.status(error).json({
                status: error,
                message: "Failed to delete product"
            })
        }
    }
}