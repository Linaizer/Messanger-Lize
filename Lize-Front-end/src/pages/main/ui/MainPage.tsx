import { useState } from "react"
import ChatList from "../../../widgets/chat-list"
import ChatWindow from "../../../widgets/chat-window"
import Slidebar from "../../../widgets/slidebar"
import { MessageCircle } from "lucide-react"
import axiosInstance from "../../../shared/api/axios"
import SearchUserModal from "../../../features/search-user"

const MainPage = () => {
    const [selectedChatId, setSelectedChatId] = useState<number | null>(null)
    const [selectedChatName, setSelectedChatName] = useState<string | null>(null)
    const [isModalState, setIsModalState] = useState(false)

    const handleSearchUser = async (id: number, name: string) => {
        const response = await axiosInstance.post('/api/chats', { name, targetUserId: id })
        setSelectedChatId(response.data.id)
        setSelectedChatName(name)
    }
    return (
        <div className="grid grid-cols-[80px_320px_1fr] h-screen">
            <div><Slidebar /></div>
            <div><ChatList onSelect={(id, name) => {
                setSelectedChatId(id)
                setSelectedChatName(name)

            }} onSelectUser={(id, name) => {
                handleSearchUser(id, name)
            }} /></div>
            {selectedChatId ? <ChatWindow chatId={selectedChatId}
                onClose={() => setSelectedChatId(null)}
                chatName={selectedChatName ?? ''} /> : <div
                    className="h-full flex flex-col justify-center items-center gap-3 bg-gray-100 
            dark:bg-gray-900 text-gray-400 dark:text-gray-500">
                <MessageCircle size={48} strokeWidth={1} />
                <p className="text-lg">Select a chat to start messaging</p>
            </div>}
            {isModalState && (
                <SearchUserModal
                    onClose={() => setIsModalState(false)}
                    onSelectUser={(user) => handleSearchUser(user.id, user.name)}
                />
            )}
        </div>
    )
}

export default MainPage