import type { FastifyPluginAsync } from 'fastify';
import { getChats, createChat,deleteChat } from '../controllers/chatController.js';
import { authenticate } from '../middleware/authenticate.js';

const chatRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', { preHandler: [authenticate] }, getChats)
  fastify.post<{ Body: { name: string, targetUserId: number } }>('/', { preHandler: [authenticate] }, createChat)
  fastify.delete<{ Params: { chatId: string } }>('/:chatId', { preHandler: [authenticate] }, deleteChat)
}

export default chatRoutes;