import React,{useState} from 'react'

const Crew=({crew})=>{
const newData=crew.map((x,i)=>{
    return i===0 ? {...x,isClicked:true}: {...x,isClicked:false}
})
const [crewData,setCrewData]=useState(newData)
const [{name,images,role,bio}]=crewData.filter(y=>y.isClicked)
const choose=(member)=>{
    setCrewData(pre=>pre.map(y=>{
      return (member===y.name) ? {...y,isClicked:true} : {...y,isClicked:false}
        }))
}
    return (
        <main id="main" className="grid-container  grid-container--crew flow">
            
            <h1 className="numbered-title uppercase"><span aria-hidden="true">02</span>
            Meet your crew</h1>
            <picture>
                <source srcSet={images.webp} type='image/webp'/>
            <img src={images.png} alt={`image of ${name}`} />
            </picture>
                <div className="dot-indicators flex dot-tab">
                        {crewData.map((obj,i)=> <button key={i} 
                        onClick={()=>choose(obj.name)} 
                        aria-selected={obj.isClicked}><span className='sr-only'>{obj.name}</span></button>)}
                </div>

            <article className='crew-info flow'>
                <header className='flow'>
             <h2 className="fs-600 uppercase ff-serif">{role}</h2>
             <p className="fs-700 uppercase ff-serif">{name}</p>
             </header>
             <p>{bio}</p>
            </article>

        </main>
    )
}

export default Crew;