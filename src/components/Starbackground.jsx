import { useEffect, useState } from "react"




const Starbackground = () => {
  const [star, setstar] = useState([])
  const [meteors, setmeteors] = useState([])

  useEffect(()=>{
    generateStars();
    generateMeteors()

    
  const handleresize = ()=>{
    generateStars();
  }
  window.addEventListener('resize' , handleresize);
  return () => window.removeEventListener("resize",handleresize);
  },[])




  const generateStars = () =>{
    const numberofstar = Math.floor(window.innerWidth * window.innerHeight ) /7000;

    const newstars = []

    for(let i = 0 ; i < numberofstar;i++){
        newstars.push({
            id:i,
            size: Math.random() * 3 + 1 ,
            x: Math.random() * 100, 
            y: Math.random()*100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4  + 2,

        })
    }
    setstar(newstars)
  }

  const generateMeteors = () =>{
    const numberofMeteors = 4
    const newMeteors = []

    for(let i = 0 ; i < numberofMeteors;i++){
        newMeteors.push({
            id:i,
            size: Math.random() * 2 + 1 ,
            x: Math.random() * 100, 
            y: Math.random()*20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,

        })
    }
    setmeteors(newMeteors)
  }


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {star.map((item) =>(
            <div key={item.id} className="star animate-pulse-subtle" style={{
                    width: item.size+ "px" , 
                    height: item.size+ "px" ,
                    left:item.x+ "%"  , 
                    top:item.y+ "%" , 
                    opacity:item.opacity , 
                    animationDuration: item.animationDuration+ "s" , 
                }
            } >

            </div>
        ))}
      
      {meteors.map((meteor) =>(
            <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size *50 + "px" , 
                    height: meteor.size * 2 + "px" ,
                    left:meteor.x+ "%"  , 
                    top:meteor.y+ "%" , 
                    animationDelay:meteor.delay , 
                    animationDuration: meteor.animationDuration+ "s" , 
                }
            } >

            </div>
        ))}
      
    </div>
  )
}

export default Starbackground
