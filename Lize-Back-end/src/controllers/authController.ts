import type { FastifyReply, FastifyRequest } from "fastify";
import { createAuthService, loginService } from "../service/authService.js";


export const authController = async (request: FastifyRequest<{ Body: { name: string, email: string, password: string } }>, reply: FastifyReply) => {
    const { name, email, password } = request.body

    const user =  await createAuthService(name, email, password)

    const token = request.server.jwt.sign({userId: user.id})

    return reply.send({token})
}

export const loginContoller = async (request: FastifyRequest<{ Body: { email: string, password: string } }>, reply: FastifyReply) => {
    const { email, password } = request.body
    const user = await loginService(email,password)

    if(!user){
        return reply.status(401).send({message: 'Invalid credentials'})
    }

    const token = request.server.jwt.sign({userId: user.id})

 return reply.send({token})    
}