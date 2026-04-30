import { type FastifyPluginAsync } from "fastify";
import { authenticate } from "../middleware/authenticate.js";
import { getUserMe, searchUserController } from "../controllers/userController.js";



export const userRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get<{ Querystring: { search?: string } }>('/', { preHandler: [authenticate] }, searchUserController)
    fastify.get<{ Querystring: { userId: number } }>('/me', { preHandler: [authenticate] }, getUserMe)
}

