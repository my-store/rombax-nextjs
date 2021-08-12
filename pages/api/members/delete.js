import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) 
{
    if(req.method === "POST") {
        try {
            const { id } = JSON.parse(req.body)
            await prisma.members.delete({
                where: {
                    id: Number(id)
                }
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