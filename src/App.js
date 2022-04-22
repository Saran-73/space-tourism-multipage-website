import React,{useState,useEffect} from "react"
import data from "./data.json"
import Destination from "./components/Destination.js"
import Crew from "./components/Crew.js"
import Technology from "./components/Technology.js"
// import Details from "./components/Details.js"

const App=()=>{

const [info,setInfo]=useState(data)
//display nav element which is true
const [navigation,setNavigation]=useState([false,false,true,false])
//clicked element will be true 
const selectSlide=(id)=>{
  setNavigation(pre=>pre.map((x,i)=>id===i ? x=true : x=false))
}
//store those boolean using destructring
const [home,destination,crew,tech]=navigation;
//create an array of nav text
const navBar=["home","destinations","crew","technology"]

// const selected=()=>{
//   return  destination ? 'destination' : crew ? 'crew' : tech ? 'tech' :'home'
// }

//using Direct DOM mainuption to open and close nav in mobile view
//not a best approach?
//is this ok to code like this????
 //useEffect(()=>{
//   const nav = document.querySelector(".primary-navigation");
//   const btn = document.querySelector(".mobile-nav-btn");

//   const accessNav=() => {
//     const visiblity = nav.getAttribute("data-visible");
//     if (visiblity === "false") {
//         nav.setAttribute("data-visible", true);

//     } else {
//         nav.setAttribute("data-visible", false);
//     }
// }
//   btn.addEventListener("click", accessNav)
//   return function(){
//     btn.removeEventListener("click",accessNav)
//   }
 //},[])

//open and hide nav using useRef(not a best practise only a final option)
//React.useRef()

//open and hide nav (proper React method)
const [isNavOpen,setIsNavOpen]=useState(false)

  return (
    <div className="app">
        <a className="skip-to-content" href="#main">Skip to content</a>
      <header className="primary-header flex">
        
        <div>
        <img src="../assets/shared/logo.svg" alt="space tourism logo" className="logo"/>
        </div>
        
        <button className="mobile-nav-btn"
         onClick={()=>setIsNavOpen(!isNavOpen)} aria-expanded={isNavOpen ? "true" :"false"}
          aria-controls="primary-navigation">
           <span className="sr-only">Menu</span>
        </button>
    
       <nav className="nav-bar">
        <ul id="primary-navigation" data-visible={isNavOpen ? "true" :"false"} 
        className="primary-navigation underline-indicators flex">
       { navBar.map((x,i)=> <li key={i} onClick={()=>selectSlide(i)}
         className="ff-sans-cond uppercase text-white letter-spacing-2" aria-selected={navigation[i]}>
           <span aria-hidden="true">0{i+1}</span>{x}</li>) }
        </ul>
      </nav>
      </header>

      {home && <main id="main" className="grid-container  grid-container--home">
        <div>
        <h1 className="uppercase text-accent fs-500 ff-sans-cond letter-spacing-2 letter-spacing-1">
         So, you want to travel to <span  className="fs-900 ff-serif text-white d-block">Space</span></h1>
         <p>Lets face it: If you want to go to space you might as well genuinely go to outer space
         and not hover kind of on the edge of it.
         Well sit back, and relax because well give you a truly out of this world experience.</p>
         </div>
         <div>
         <button className="uppercase large-button ff-serif text-dark bg-white"  
         onClick={()=>selectSlide(1)}>Explore</button>
         </div>
         </main> }

         { destination && <Destination destinations={info.destinations}/>}
         { crew && <Crew crew={info.crew}/>}
         { tech && <Technology technology={info.technology}/>}

          {/* {!home && <Details details={info.technology}
                                            navigateTo={selected()} />}  */}


    </div> 
  );
}

export default App;
