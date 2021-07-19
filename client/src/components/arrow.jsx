import React from "react";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";



const Arrow = () => {


    return ( 
        <div className="flex self-center absolute top-1/2 w-full mx-auto justify-between max-w-screen-xl">
            <ArrowLeft />
            <ArrowRight />
        </div>
     );
    }

 
export default Arrow;