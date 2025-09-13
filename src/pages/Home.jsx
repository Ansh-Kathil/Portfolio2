import React from 'react'
import Themetoggle from '../components/Themetoggle'
import Starbackground from '../components/Starbackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme */}
        <Themetoggle/>
        {/* backeff */}
        <Starbackground/>
        {/* navbar */}
        <Navbar/>

        {/* Main constey */}
        <main>
          <HeroSection/>
          <AboutMe/>
          <SkillSection/>
          <ProjectSection/>
          <ContactSection/>
        </main>



        {/* {*Footer*} */}
        <Footer/>
    </div>
  )
}

export default Home
