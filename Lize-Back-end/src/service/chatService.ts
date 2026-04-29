import { prisma } from "../db/prisma.js"

export const getAllChats = async (userId: number) => {
    return await prisma.chat.findMany({
        where: {
            UserChat: {
                some: { userId }
            }
        }
    })
}

export const createChatService = async (name: string, userId: number, targetUserId: number) => {
    console.log('Creating chat with userId:', userId)

    const existingChat = await prisma.chat.findFirst({
        where: {
            AND:[
                {UserChat:{some:{userId}}},
                {UserChat:{some:{userId:targetUserId}}}
            ]
        }
    })
    if(existingChat) return existingChat

    try {
        return await prisma.$transaction(async (tx) => {
            const chat = await tx.chat.create({ data: { name } })
            await tx.userChat.create({ data: { userId, chatId: chat.id } })
            await tx.userChat.create({ data: { userId: targetUserId, chatId: chat.id } })
            return chat
        })
    } catch (error) {
        console.error('Transaction error:', error)
        throw error
    }
}