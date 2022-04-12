import React,{useState} from 'react'

const Technology=({technology})=>{

const newData=technology.map((x,i)=>{
    return i===0 ? {...x,isClicked:true}: {...x,isClicked:false}
})
const [crewData,setCrewData]=useState(newData)
const [{name,images,description,distance,travel}]=crewData.filter(y=>y.isClicked)
const choose=(techUsed)=>{
    setCrewData(pre=>pre.map(y=>{
      return (techUsed===y.name) ? {...y,isClicked:true} : {...y,isClicked:false}
        }))
}
    return (
        <section className="flex">
            <div>
            <h2>03 space launch 101</h2>
            <img src={images.portrait}/>
            </div>
            <div>
                
            <div className="grid">
        {technology.map((obj,i)=> <button key={i} onClick={()=>choose(obj.name)}>{i+1}</button>)}
                    
                </div>
            <p>The terminology...</p>
             <h1>{name}</h1>
             <p>{description}</p>

            </div>
        </section>
    )
}

export default Technology;