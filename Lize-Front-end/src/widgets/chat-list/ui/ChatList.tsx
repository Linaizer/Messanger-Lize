import { useEffect, useState } from "react"
import { chatApi, type Chat } from '../../../entities/chat'
import axiosInstance from "../../../shared/api/axios"
import { Trash2 } from "lucide-react"


interface ChatListProps {
    onSelect: (id: number, name: string) => void
    onSelectUser: (id: number, name: string) => void
}

const ChatList = ({ onSelect, onSelectUser }: ChatListProps) => {
    const [chats, setChats] = useState<Chat[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<{ id: number, name: string }[]>([])
    const [hoveredChatId, setHoveredChatId] = useState<number | null>(null)

    const loadChats = () => {
        chatApi().then(data => setChats(data))
    }

    useEffect(() => {
        loadChats()
    }, [])

    useEffect(() => {
        const timer = setTimeout(async () => {
            const response = await axiosInstance.get(`/api/users?search=${searchQuery}`)
            setSearchResults(response.data)
        }, 350)
        return () => clearTimeout(timer)
    }, [searchQuery])

    const handleDeleteChat = async (id: number) => {
        const response = await axiosInstance.delete(`/api/chats/${id}`)
        loadChats()
        return response.data

    }

    return (
        <div className="h-full bg-gray-800 p-4">
            <input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
            />
            {searchQuery ? searchResults.map((user) => (
                <div key={user.id}
                    onClick={async () => {
                        await onSelectUser(user.id, user.name);
                        loadChats();
                        setSearchQuery('')
                    }}
                    className="p-3 rounded-lg cursor-pointer hover:bg-gray-700 text-white"
                >{user.name}</div>
            )) : chats.map((chat) => (
                <div key={chat.id}
                    onClick={() => onSelect(chat.id, chat.name)}
                    className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-700 text-white"
                    onMouseEnter={() => setHoveredChatId(chat.id)}
                    onMouseLeave={() => setHoveredChatId(null)}
                > {chat.name} {hoveredChatId === chat.id && <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChat(chat.id)
                    }}
                    className="ml-auto text-gray-400 hover:text-red-400 transition-colors"
                ><Trash2 size={16} /></button>}</div >
            ))}
        </div >
    )
}

export default ChatList