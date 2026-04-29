import type { FastifyPluginAsync } from "fastify";
import { authenticate } from "../middleware/authenticate.js";
import { searchUserController } from "../controllers/userController.js";


export const userRoutes: FastifyPluginAsync = async (fastify)=>{
fastify.get<{Querystring:{search?: string}}>('/', {preHandler:[authenticate]},searchUserController)
}