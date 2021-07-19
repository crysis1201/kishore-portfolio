import React from "react";

const portfolioPreview = ({title, imageUrl}) => {
    return ( 
        <div className="">
            <p className="text-white text-lg text-center mb-5">{title}</p>
            <div className="rounded-xl m-auto flex items-center bg-white w-96 h-60 overflow-hidden">
                <video autoPlay loop className="w-auto" src={imageUrl} alt="motion Design" />
            </div>
        </div>
     );
}
 
export default portfolioPreview
