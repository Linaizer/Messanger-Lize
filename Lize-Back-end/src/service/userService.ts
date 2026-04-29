import { prisma } from "../db/prisma.js"

export const searchUsers = async (id: number, name: string) => {

    return await prisma.user.findMany({
        where: {
            name: {
                contains: name,
                mode:'insensitive'
            },
            id: { not: id }
        },
        select:{
            id:true,
            name:true
        }
    })

}