import type { FastifyReply, FastifyRequest } from "fastify";
import { getUserMeService, searchUsers } from "../service/userService.js";

export const searchUserController = async (
  request: FastifyRequest<{ Querystring: { search?: string } }>,
  reply: FastifyReply
) => {
  const { userId } = request.user as { userId: number }
  const search = request.query.search ?? ''

  return reply.send(await searchUsers(userId, search))

}

export const getUserMe = async (request: FastifyRequest, reply: FastifyReply) => {
  const { userId } = request.user as { userId: number }
  return reply.send(await getUserMeService(userId))
}