import 'dotenv/config'
import Fastify from 'fastify'
import chatRoutes from './routes/chatRoutes.js'
import authRoute from './routes/authRoutes.js'
import messageRoute from './routes/messageRoute.js'
import fp from 'fastify-plugin'
import jwt from "@fastify/jwt"
import WebSocket  from  '@fastify/websocket'
import cors from '@fastify/cors'
import wsRoutes from './routes/wsRoute.js'
import { userRoutes } from './routes/userRoute.js'

const app = Fastify()
app.register(cors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
})
app.register(fp(jwt), { secret: process.env.JWT_SECRET! })
app.register(chatRoutes, { prefix: '/api/chats' })
app.register(authRoute, { prefix: '/api/auth' })
app.register(messageRoute, { prefix: '/api/chats/:chatId/messages' })
app.register(WebSocket )
app.register(wsRoutes, {prefix:'/chat/ws'})
app.register(userRoutes,{prefix:'/api/users'})


app.listen({ port: 3000 }, () => {
  console.log('Server running on port 3000')
})