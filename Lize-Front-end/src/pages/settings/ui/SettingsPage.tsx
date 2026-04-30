import { useNavigate } from "react-router-dom"
import { User, Palette, LogOut, ArrowLeft } from "lucide-react"
import { useThemes } from "../../../shared/lib/useThemes"
import userApi from "../../../entities/user"
import { useEffect, useState } from "react"

const SettingsPage = () => {
    const navigate = useNavigate()
    const { isDark, toggleTheme } = useThemes()
    const [usersApi, setUsersApi] = useState<{name: string, email: string} | null>(null)
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        userApi().then(data => setUsersApi(data))
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6">
                <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-semibold mb-8">Settings</h1>
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                    U
                </div>
                <div>
                    <p className="text-lg font-medium">{usersApi?.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{usersApi?.email}</p>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl mb-2">
                <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl" onClick={toggleTheme}>
                    <Palette size={20} className="text-gray-500 dark:text-gray-400" />
                    <span>Theme</span>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl mt-6">
                <div onClick={handleLogout} className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-red-400">
                    <LogOut size={20} />
                    <span>Log out</span>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage