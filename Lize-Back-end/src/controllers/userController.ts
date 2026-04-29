import type { FastifyReply, FastifyRequest } from "fastify";
import { searchUsers } from "../service/userService.js";

export const searchUserController = async (
  request: FastifyRequest<{ Querystring: { search?: string } }>,
  reply: FastifyReply
) => {
const {userId} = request.user as {userId:number}
const search = request.query.search ?? '' 

return reply.send(await searchUsers(userId,search))

}