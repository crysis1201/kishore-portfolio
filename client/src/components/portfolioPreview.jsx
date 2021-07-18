import React from "react";
import ProgressDiv from "./progressDiv";

const portfolioPreview = ({title, imageUrl}) => {
    return ( 
        <div className="">
            <p className="text-white text-lg text-center mb-5">{title}</p>
            <div className="rounded-xl bg-white p-8 w-80 h-80">
                <img className="" src={imageUrl} alt="motion Design" />
            </div>
        </div>
     );
}
 
export default portfolioPreview
