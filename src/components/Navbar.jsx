import React, { useEffect, useState } from 'react'

import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]
    const [isscrolled, setisscrolled] = useState(false);
    const [ismenuopen, setismenuopen] = useState(false)

    useEffect(() => {
        const handlescroll = () => {
            setisscrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handlescroll)
        handlescroll(); 
        return () => window.removeEventListener("scroll", handlescroll);
    },[])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-500 ",
            isscrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className='container flex items-center justify-between md:justify-around '>
                <a className='text-2xl font-bold text-primary flex items-center' href='#hero'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Ansh</span> Portfolio
                    </span>
                </a>
                {/* Destop */}
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => (

                        <a key={key} href={item.href} className='text-foreground/80 hover:text-primary  transition-colors duration-300'>
                            {item.name}
                        </a>

                    ))}
                </div>


                {/* Mobile */}

                <button onClick={() => setismenuopen((prev) => !prev)} className='md:hidden p-2 text-foreground z-50' aria-label={ismenuopen ? "Close Menu" : "Open Menu"} >{ismenuopen ? <X size={24} /> : <Menu size={24} />}</button>


                <div className={cn("fixed inset-0 bg-background/55 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    ismenuopen ? "opacity-100 pointer-events-auto " : "opacity-0 pointer-events-none"
                )}>

                    <div className='flex flex-col text-xl space-y-8'>
                        {navItems.map((item, key) => (

                            <a key={key} onClick={() => setismenuopen(false)} href={item.href} className='text-foreground/80 hover:text-primary  transition-colors duration-300'>
                                {item.name}
                            </a>

                        ))}
                    </div>
                </div>

            </div>

        </nav >
    )
}

export default Navbar
