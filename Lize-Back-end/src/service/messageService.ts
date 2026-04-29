import { prisma } from "../db/prisma.js"

export const getMessagesByChatId  = async (chatId:number) =>{
return await prisma.message.findMany({
    where:{chatId}
})
}

export  const createMessageService  = async (chatId:number,content:string,userId:number)=>{
return await prisma.message.create({
    data:{chatId,content,userId}
})
}