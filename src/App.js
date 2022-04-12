import React,{useState} from "react"
import data from "./data.json"
import Destination from "./components/Destination.js"
import Crew from "./components/crew/Crew.js"
import Technology from "./components/Technology.js"
import "./App.css"

const App=()=>{

const [info,setInfo]=useState(data)
const [menu,setMenu]=useState(true)
//display nav element which is true
const [navigation,setNavigation]=useState([true,false,false,false])
//clicked element will be true 
const selectSlide=(id)=>{
  setNavigation(pre=>pre.map((x,i)=>id===i ? x=true : x=false))
}
//store those boolean using destructring
const [home,destination,crew,tech]=navigation;
//create an array of nav text
const navBar=["home"].concat(Object.keys(info))

const styles={
  backgroundImage:'url(./background-home-mobile.jpg)',
  width:'100%',
  height:'100%',
  backgroundSize:'contain'
}
  return (
    <div className="app " style={styles}>
      <header >
        <div >
        <img src="../assets/shared/logo.svg"/>
       <img src="../assets/shared/icon-hamburger.svg" onClick={()=>setMenu(pre=>!pre)}/>
        </div>
     { menu && <div className="mobile--menu">
      <img src="../assets/shared/icon-close.svg" onClick={()=>setMenu(pre=>!pre)}/>
       <nav >
        <ul className="primary-navigation underline-indicators">
       { navBar.map((x,i)=> <li key={i} onClick={()=>selectSlide(i)}>
         <a href="#" className="uppercase text-white letter-spacing-2" >
           <span>0{i+1}</span></a>{x}</li>) }
        </ul>
      </nav>
      </div>}
      </header>
      {home && <section className="home--layout">
        <div>
      <h3 className="uppercase text-accent fs-300 ff-sans-cond letter-spacing-2">So, you want to travel to</h3>
      <h2 className="uppercase ff-seriff fs-800">Space</h2>
      <p className="ff-sans-normal text-accent fs-200">Lets face it: If you want to go to space you might as well genuinely go to outer space
        and not hover kind of on the edge of it.
         Well sit back, and relax because well give you a truly out of this world experience.</p>
         </div>
         <button className="btn uppercase large-button ff-serif fs-600 text-dark bg-white"  
         onClick={()=>selectSlide(1)}>Explore</button>
         {/* <div className="btn">
           <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
                    </div> */}
         </section> }
         { destination && <Destination destinations={info.destinations}/>}
         { crew && <Crew crew={info.crew}/>}
         { tech && <Technology technology={info.technology}/>}


    </div> 
  );
}

export default App;
