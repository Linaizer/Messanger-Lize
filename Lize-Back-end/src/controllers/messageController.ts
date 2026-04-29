import type { FastifyRequest, FastifyReply } from 'fastify'
import { createMessageService, getMessagesByChatId } from '../service/messageService.js'

export const getMessage = async (request: FastifyRequest<{Params:{chatId:string}}>, reply:FastifyReply)=>{
 const {chatId} = request.params
 return reply.send(await getMessagesByChatId(Number(chatId)))
}

export const createMessage = async (
  request: FastifyRequest<{ Params: { chatId: string }, Body: { content: string } }>,
  reply: FastifyReply
) => {
    const {chatId} = request.params
    const {content} = request.body
    const {userId} = request.user as {userId:number}

  return reply.send(await createMessageService(Number(chatId),content,userId))
}