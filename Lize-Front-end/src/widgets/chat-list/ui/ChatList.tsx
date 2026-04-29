import { useEffect, useState } from "react"
import { chatApi, type Chat } from '../../../entities/chat'
import axiosInstance from "../../../shared/api/axios"


interface ChatListProps {
    onSelect: (id: number, name: string) => void
    onSelectUser: (id: number, name: string) => void
}

const ChatList = ({ onSelect, onSelectUser }: ChatListProps) => {
    const [chats, setChats] = useState<Chat[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<{ id: number, name: string }[]>([])

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
                onClick={async () => {await onSelectUser(user.id, user.name); 
                    loadChats(); 
                    setSearchQuery('')}} 
                    className="p-3 rounded-lg cursor-pointer hover:bg-gray-700 text-white"
                    >{user.name}</div>
            )) : chats.map((chat) => (
                <div key={chat.id} onClick={() => onSelect(chat.id, chat.name)} className="p-3 rounded-lg cursor-pointer hover:bg-gray-700 text-white">{chat.name}</div>
            ))}
        </div>
    )
}

export default ChatList