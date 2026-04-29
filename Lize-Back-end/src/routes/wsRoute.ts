import { type FastifyPluginAsync } from 'fastify'
import { createMessageService } from '../service/messageService.js'

const rooms = new Map()

const wsRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get<{ Params: { chatId: string } }>('/chat/:chatId', { websocket: true }, (socket, request) => {
        const chatId = request.params.chatId
        const { token } = request.query as { token: string }
        try {
            if (!token) {
                socket.close()
                return
            }
            const user = fastify.jwt.verify(token) as{userId:number}
            const userId = user.userId
            if (!rooms.has(chatId)) {
                rooms.set(chatId, new Set())
            }
            rooms.get(chatId).add(socket)

            socket.on('message', (message) => {
                createMessageService(Number(chatId), message.toString(),userId)
                for (const socket of rooms.get(chatId)) {
                    socket.send(JSON.stringify({ id: Date.now(), content: message.toString() }))
                }
            })
            console.log(user)
            socket.on('close', () => rooms.get(chatId).delete(socket))
        } catch {
            socket.close()
        }
    })
}

export default wsRoutes