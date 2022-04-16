import React,{useState} from 'react'

const Details=({details , navigateTo})=>{
    console.log(navigateTo)
const newData=details.map((x,i)=>{
    return i===0 ? {...x,isClicked:true}: {...x,isClicked:false}
})
const [inputData,setInputData]=useState(newData)
const [{name,images,description,distance,travel}]=inputData.filter(y=>y.isClicked)
const choose=(currentName)=>{
    setInputData(pre=>pre.map(y=>{
      return (currentName===y.name) ? {...y,isClicked:true} : {...y,isClicked:false}
        }))
}
    return (
        <section className="flex">

            <div>
            <h2>01 pick your destination</h2>
            <img src={images.png}/>
            </div>

            {navigateTo === 'destination' && <div>
                <nav>
                    <ul className="flex">
                        {inputData.map((obj,i)=> <li key={i} onClick={()=>choose(obj.name)}>{obj.name}</li>)}
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
                </div> }
              { navigateTo === 'tech' && <div>    
              <div className="grid">
          {inputData.map((obj,i)=> <button key={i} onClick={()=>choose(obj.name)}>{i+1}</button>)}
                      
                  </div>
              <p>The terminology...</p>
               <h1>{name}</h1>
               <p>{description}</p>
              </div>
            }

        </section>
    )
}

export default Details;