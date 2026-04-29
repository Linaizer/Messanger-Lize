import { useEffect, useState } from "react"
import { type Message, messageApi } from "../../../entities/message"
import { useWebSocket } from "../../../shared/lib/useWebSocket"

interface ChatWindowProps {
    chatId: number | null
    onClose: () => void
    chatName: string
}

const ChatWindow = ({ chatId, onClose, chatName }: ChatWindowProps) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState('')
    const token = localStorage.getItem('token') ?? ''
    const wb = useWebSocket(chatId ?? 0, token)

    useEffect(() => {
        if (!chatId) return
        messageApi(chatId).then(data => setMessages(data))
        console.log(chatId)
    }, [chatId])

    const handleSend = () => {
        wb.sendMessage(inputValue)
        setInputValue('')

    }


    return (
        <div className="h-full bg-gray-100 dark:bg-slate-600 flex flex-col p-4">
            <div className="font-semibold text-lg mb-4 pb-2 border-b border-gray-300 dark:border-gray-500 flex justify-between text-gray-900 dark:text-white">
                <span> {chatName} </span>
                <button onClick={onClose} className="pr-4">X</button>
            </div>
            <div className="flex-1 overflow-y-auto">
                {messages.map((message) => (
                    <div key={message.id} className="bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-3 mb-2 shadow-sm max-w-md">{message.content}</div>
                ))}
                {wb?.message.map((msg) => (
                    <div key={msg.id} className="bg-slate-700 text-white rounded-lg p-3 mb-2 shadow-sm max-w-md">{msg.content}</div>
                ))}
            </div>
            <div className="flex gap-2 mt-4">
                <input value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white flex-1 rounded-lg px-4 py-2" />
                <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Send</button>
            </div>
        </div>
    )
}
export default ChatWindow