import React,{useState} from 'react'

const Technology=({technology})=>{

const newData=technology.map((x,i)=>{
    return i===0 ? {...x,isClicked:true}: {...x,isClicked:false}
})
const [crewData,setCrewData]=useState(newData)
const [{name,images,description}]=crewData.filter(y=>y.isClicked)
const choose=(techUsed)=>{
    setCrewData(pre=>pre.map(y=>{
      return (techUsed===y.name) ? {...y,isClicked:true} : {...y,isClicked:false}
        }))
}
    return (
        <main id="main" className="grid-container  grid-container--tech flow">
            <h1 className="numbered-title"><span aria-hidden="true">03</span>space launch 101</h1>
                <picture>
            <source srcSet={images.webp} type='image/webp'/>
            <img src={images.portrait} alt={`the ${name}`}/>
                </picture>

            <div className=" number-indicators nav-tab fs-500">
                 {crewData.map((obj,i)=> <button key={i}
                        onClick={()=>choose(obj.name)}
                        aria-selected={obj.isClicked}
                        className="bg-dark">{i+1}</button>)}
              </div>          
            <article className='tech-info flow'>
                <header className='flow'>
            <h2 className="fs-400 uppercase ff-serif text-accent">The terminology...</h2>
             <p className="fs-600 uppercase ff-serif">{name}</p>
             </header>
             <p className='text-accent'>{description}</p>
            </article>

        </main>
    )
}

export default Technology;