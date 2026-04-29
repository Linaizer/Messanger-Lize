import type { FastifyPluginAsync } from 'fastify';
import { getChats, createChat } from '../controllers/chatController.js';
import { authenticate } from '../middleware/authenticate.js';


const chatRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', { preHandler: [authenticate] }, getChats)
  fastify.post <{Body:{name:string}}>('/', {preHandler:[authenticate]}, createChat)
}

export default chatRoutes;