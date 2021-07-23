import React from "react";
import { withRouter } from "react-router";

const portfolioPreview = ({title, imageUrl, history, match, routeName}) => {
    return ( 
        <div className="">
            <p className="text-white text-lg text-center mb-5">{title}</p>
            <div  onClick={() => history.push(`${match.path}/${routeName}`)} className="rounded-xl m-auto flex items-center bg-white w-72 h-48 sm:w-96 sm:h-60 overflow-hidden">
                <video autoPlay loop className="w-auto" src={imageUrl} alt="motion Design" />
            </div>
        </div>
     );
}
 
export default withRouter(portfolioPreview)
