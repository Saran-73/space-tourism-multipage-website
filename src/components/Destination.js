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
        <main id="main" className="grid-container  grid-container--destination flow">
          
            <h1 className="numbered-title"><span aria-hidden="true">01</span> pick your destination</h1>
            <img src={images.png} alt={`the ${name} image`} />
            

      
                <div className="tab-list underline-indicators flex ">
                {destinations.map((obj,i)=> <button key={i} 
                        onClick={()=>choose(obj.name)}
                        aria-selected="false"
                        className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">{obj.name}</button>)}
                </div>

          <article className='destination-info'>
             <h2 className="fs-800 uppercase ff-serif">{name}</h2>
             <p>{description}</p>
             <div className="destination-meta flex">
             <div>
                 <h3 className="text-accent fs-200 uppercase">avg. distance</h3>
                 <p  className="ff-serif uppercase">{distance}</p>
             </div>
             <div>
                 <h3 className="text-accent fs-200 uppercase">est. travel time</h3>
                 <p  className="ff-serif uppercase">{travel}</p>
             </div>
             </div>
              </article>
        </main>
    )
}

export default Destination;