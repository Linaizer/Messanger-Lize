import { MessageCircle, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Slidebar = () => {
    return (
        <>
            <div className='hidden md:flex h-full bg-white dark:bg-gray-900 flex-col items-center py-6 gap-6'>
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

            <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 flex justify-around items-center py-3 border-t border-gray-200 dark:border-gray-700 z-50'>
                <button className='text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'>
                    <MessageCircle size={24} />
                </button>
                <Link to={'/settings'} className='text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'>
                    <Settings size={24} />
                </Link>
            </div>
        </>
    )
}

export default Slidebar