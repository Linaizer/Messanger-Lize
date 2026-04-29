import type { FastifyPluginAsync } from 'fastify';
import { authenticate } from '../middleware/authenticate.js';
import { getMessage, createMessage } from '../controllers/messageController.js';

 const messageRoute: FastifyPluginAsync  = async (fastify)=>{
fastify.get<{ Params: { chatId: string } }>('/', { preHandler: [authenticate] }, getMessage)
fastify.post<{ Params: { chatId: string }, Body: { content: string } }>('/', { preHandler: [authenticate] }, createMessage)
}

export default messageRoute