import { useState, useEffect, useRef } from "react"
import type { Message } from "../../entities/message"

export const useWebSocket = (chatId: number, token: string) => {
    const [message, setMessage] = useState<Message[]>([])
    const wsRef = useRef<WebSocket | null>(null)


    useEffect(() => {
        if (!chatId) return
        const ws = new WebSocket(`ws://localhost:3000/chat/ws/chat/${chatId}?token=${token}`)
        wsRef.current = ws
        ws.onmessage = (event) => {
            console.log(event.data)
            const newMessage = JSON.parse(event.data)
            setMessage(prev => [...prev, newMessage])
        }

        return () => {
            ws.close()
        }
    }, [chatId])
    
    const sendMessage = (content:string)=>{
        wsRef.current?.send(content)
    }
     

    return { message, sendMessage}
}