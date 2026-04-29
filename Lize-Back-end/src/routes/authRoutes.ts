import {  type FastifyPluginAsync } from 'fastify';
import { authController,loginContoller } from '../controllers/authController.js';

const authRoute: FastifyPluginAsync = async (fastify)=>{
fastify.post('/register', authController )
fastify.post('/login',loginContoller)

}

export default authRoute