import { Description } from '@radix-ui/react-toast'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Bitlinks",
      description: "A place to help people find you easily — one link that connects all your social handles in one place.",
      image: "/project1.png",
      tags: ["Nextjs", "Tailwind", "MongoDB"],
      demoUrl: "https://linktree-three-sooty.vercel.app",
      githubUrl: "https://github.com/Ansh-Kathil/linktree"
    },
    {
      id: 2,
      title: "Hulu Clone",
      description: "A front-end clone of Hulu built with React and Tailwind CSS. It fetches live movie data from an API to showcase trending titles in a modern, responsive design.",
      image: "/project2.png",
      tags: ["React", "Tailwind", "Postman", "APIs"],
      demoUrl: "https://hulu-clone-flax-iota.vercel.app/",
      githubUrl: "https://github.com/Ansh-Kathil/hulu-clone"
    },
    {
      id: 3,
      title: "Musify",
      description: "A personal-use Spotify clone running on localhost. Built with modern web technologies, it features playlist management, playback controls, and a sleek UI inspired by Spotify.",
      image: "/project3.png",
      tags: ["Javascript", "Html/CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/Ansh-Kathil/Spotify"
    },
    {
      id: 4,
      title: "Ninja Player",
      description: "A sports event discovery app where users can explore upcoming matches, tournaments, and games across different sports.",
      image: "/project4.png",
      tags: ["React", "Firebase", "next-auth", "Tailwind"],
      demoUrl: "https://ninja-player-rho.vercel.app/",
      githubUrl: "https://github.com/Ansh-Kathil/ninja.player"
    },
    {
      id: 5,
      title: "Buy Me a Chai! ",
      description: "A demo implementation of a support/donation platform where users can contribute by “buying a chai.” Built to practice modern web dev concepts and payment flow integration.",
      image: "/project5.png",
      tags: ["Nextjs", "MongoDB", "next-auth", "Razorpay"],
      demoUrl: "https://my-app-488i.vercel.app/",
      githubUrl: "https://github.com/Ansh-Kathil/my-app"
    },
    {
      id: 6,
      title: "Snake game",
      description: "A browser-based Snake Game where the player controls a snake to eat food, grow in size, and avoid collisions. Built as a fun demo project to practice game logic and keyboard controls.",
      image: "/project6.png",
      tags: ["Javascript", "Html/CSS"],
      demoUrl: "https://ansh-kathil.github.io/snake/",
      githubUrl: "https://github.com/Ansh-Kathil/snake"
    }
  ]
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {" "}
          Featured <span className='text-primary'> Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto '>
          Below are a few of my recent projects, ranging from web apps to UI experiments. These projects reflect my ability to design, develop, and deploy modern applications while continuously learning and adapting to new technologies.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div key={project.id} className='group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt="project.title" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
              </div>

              <div className='p-6'>
                <div className=' flex overflow-hidden gap-2 '>
                  {project.tags.map((tag , key) => (
                    <span key={key} className='px-2 py-1 text-nowrap text-xs border font-medium rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                  ))}
                </div>
              

              <h3 className='text-xl text-start ml my-2 font-semibold'>{project.title}</h3>
              <p className='text-muted-foreground  text-start text-sm mb-4 '>{project.description}</p>
              <div className='flex justify-between items-center ' >
                <div className='flex absolute bottom-3 right-3 space-x-3'>
                  {key!=2? 
                  <a aria-label='Demo Url' href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'> <ExternalLink size={20} /> </a>:null
                }
                  <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'> <Github  size={20}/> </a>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a className='cosmic-button w-fit flex items-center mx-auto gap-2 ' target='_blank' href="https://github.com/Ansh-Kathil">Check My Github <ArrowRight size={16}/> </a>
        </div>

      </div>

    </section>
  )
}

export default ProjectSection
