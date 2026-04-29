import { MessageCircle, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Slidebar = () => {
    return (
        <div className='h-full bg-white dark:bg-gray-900 flex flex-col items-center py-6 gap-6'>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                U
            </div>
            <button className='text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white size-6'>
                <MessageCircle />
            </button>
            <Link to={'/settings'} className='text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white size-6 mt-auto'>
                <Settings/>
            </Link>
        </div>
    )
}

export default Slidebar