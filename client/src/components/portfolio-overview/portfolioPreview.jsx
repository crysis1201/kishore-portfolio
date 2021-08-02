import React from "react";
import { withRouter } from "react-router";

const portfolioPreview = ({title, imageUrl, history, match, routeName}) => {
    return ( 
        <div className="mt-4 lg:mt-0">
            <div  onClick={() => history.push(`${match.path}/${routeName}`)} className="rounded-xl m-auto flex items-center bg-white w-72 h-48 sm:w-96 sm:h-60 overflow-hidden">
                <video autoPlay loop className="w-auto" src={imageUrl} alt="motion Design" />
            </div>
            <p className="text-white text-lg text-center mt-5">{title}</p>
        </div>
     );
}

export default withRouter(portfolioPreview)
