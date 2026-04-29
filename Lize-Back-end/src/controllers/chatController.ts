import type { FastifyRequest, FastifyReply } from 'fastify'
import { createChatService, deleteChatService, getAllChats } from '../service/chatService.js'

export const getChats = async (request: FastifyRequest, reply: FastifyReply) => {
  const {userId} = request.user as {userId:number}
  return reply.send(await getAllChats(userId))
}

export const createChat  = async (request: FastifyRequest<{Body:{name:string, targetUserId:number}}> ,reply: FastifyReply)=>{
  const {name} = request.body
  const {userId} = request.user as {userId:number}
  const {targetUserId}  = request.body 
  return reply.send(await createChatService(name,userId,targetUserId))
}

export const deleteChat = async (request: FastifyRequest<{Params:{chatId:string}}>,reply:FastifyReply)=>{
const {chatId} = request.params
return reply.send( await deleteChatService(Number(chatId)))
}