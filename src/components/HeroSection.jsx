import { ArrowDown } from "lucide-react"
import { useState, useEffect } from "react";


const HeroSection = () => {
  const [isscrolled, setisscrolled] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            setisscrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handlescroll)
        handlescroll(); 
        return () => window.removeEventListener("scroll", handlescroll);
      },[])

  return ( 
    <div id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 ">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ansh </span>
                <span className="opacity-0 animate-fade-in-delay-2 text-gradient  "> Kathil </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foregrounf max-2xl mx-auto opacity-0 animate-fade-in-delay-3">Web Developer | React & Tailwind Enthusiast | Turning ideas into beautiful, functional web experiences.</p>
        </div>
        <div className="pt-4 mt-4 animate-fade-in-delay-4 opacity-0 ">
            <a href="#projects" className="cosmic-button"> 
                View My Work
            </a>
        </div>
      </div>

      {!isscrolled? 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-forefround mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>

      : null}
    </div>
  )
}

export default HeroSection
