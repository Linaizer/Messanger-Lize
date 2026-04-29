import { useEffect, useState } from "react"

export const useThemes = ()=>{
    const [isdark, setIsDark] = useState(()=>{
        return localStorage.getItem('theme') !== 'light'
    })

    useEffect(()=>{
        document.documentElement.classList.toggle('dark',isdark)
    },[])

    const switchThemes  =()=>{
        const newIsDark = !isdark
        setIsDark(newIsDark)
        localStorage.setItem('theme',newIsDark ? 'dark': 'light')
        document.documentElement.classList.toggle('dark', newIsDark)
    }

    return { isDark: isdark, toggleTheme: switchThemes }
}