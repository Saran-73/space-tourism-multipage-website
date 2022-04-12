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
        <section className="flex">
            <div>
            <h2>02 Meet your crew</h2>
            <img src={images.png}/>
            </div>
            <div>
                <nav>
                    <ul className="flex">
                        {crewData.map((obj,i)=> <li key={i} onClick={()=>choose(obj.name)}>{obj.name}</li>)}
                    </ul>
                </nav>
             <h2>{role}</h2>
             <h1>{name}</h1>
             <p>{bio}</p>

            </div>
        </section>
    )
}

export default Crew;