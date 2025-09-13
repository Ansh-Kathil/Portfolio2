import { Moon, Sun } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { cn } from '../lib/utils'

const Themetoggle = () => {
    const [isdark, setisdark] = useState(false)


    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme=="dark"){
            setisdark(true);
            document.documentElement.classList.add("dark");
        }
        else{
            setisdark(false)
        }

    },[])

    const toggle = () =>{
        if(isdark){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setisdark(false)
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
             setisdark(true)
        }
    }
  return (
    <button onClick={()=>toggle()} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden ")} >{isdark? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/> }</button>
  )
}

export default Themetoggle
