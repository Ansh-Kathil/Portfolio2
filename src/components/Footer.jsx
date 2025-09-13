import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative text-center w-full py-6 px-4 bg-card  border-t border-border mt-12  flex items-center flex-wrap justify-around '>
      <p className='text-sm text-center justify-self-center text-muted-foreground'>&copy; {new Date().getFullYear()} Ansh_kathil.io All rigths reserved.</p>
      <a href="#hero" className='absolute right-10 p-2 self-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'><ArrowUp size={20}/></a>

    </div>
  )
}

export default Footer
