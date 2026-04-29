import { prisma } from "../db/prisma.js"
import bcrypt from 'bcrypt'

export const createAuthService = async (name: string, email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return await prisma.user.create({
        data: { name, email, password: hashedPassword }
    })
}

export const loginService = async (email:string, password: string) =>{
    
    const user = await prisma.user.findUnique({
        where:{email}
    })

    if(!user){
        return null
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return null
    }
    return user
}