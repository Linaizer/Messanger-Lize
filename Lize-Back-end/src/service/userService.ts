import { prisma } from "../db/prisma.js"

export const searchUsers = async (id: number, name: string) => {

    return await prisma.user.findMany({
        where: {
            name: {
                contains: name,
                mode: 'insensitive'
            },
            id: { not: id }
        },
        select: {
            id: true,
            name: true
        }
    })
}

export const getUserMeService = async (userId: number) => {
    return await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
}