import React,{useState} from 'react'

const Destination=({destinations})=>{
const newData=destinations.map((x,i)=>{
    return i===0 ? {...x,isClicked:true}: {...x,isClicked:false}
})
const [destData,setDestData]=useState(newData)
const [{name,images,description,distance,travel}]=destData.filter(y=>y.isClicked)
const choose=(planet)=>{
    setDestData(pre=>pre.map(y=>{
      return (planet===y.name) ? {...y,isClicked:true} : {...y,isClicked:false}
        }))
}
    return (
        <section className="flex">
            <div>
            <h2>01 pick your destination</h2>
            <img src={images.png}/>
            </div>
            <div>
                <nav>
                    <ul className="flex">
                        {destinations.map((obj,i)=> <li key={i} onClick={()=>choose(obj.name)}>{obj.name}</li>)}
                    </ul>
                </nav>
             <h1>{name}</h1>
             <p>{description}</p>
             <div>
                 <p>avg. distance</p>
                 <h3>{distance}</h3>
             </div>
             <div>
                 <p>est. travel time</p>
                 <h3>{travel}</h3>
             </div>

            </div>
        </section>
    )
}

export default Destination;