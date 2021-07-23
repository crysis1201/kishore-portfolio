import React from "react";
import IntroCard from "../components/header/introcard"
//import photo from "../components/photo.jpg"

const homepage = () => {
    return ( 
         //style={{backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "630px"}}>
        <div className="h-screen py-4">
            <IntroCard />
        </div>
     );
} 
  
export default homepage;