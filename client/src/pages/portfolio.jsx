import PortfolioOverview from "../components/portfolio-overview/portfolioOverview";
import { Route } from "react-router-dom";
import React from "react";
import PortfolioContentPage from "../pages/portfolioContentPage";

const portfolio = ({match}) => {
    return (   
        <div className="my-4">
            <div className="text-white">
                <Route exact path={`${match.path}`} component={PortfolioOverview} />
                <Route path={`${match.path}/:collectionId`} component={PortfolioContentPage} />
            </div>
        </div>
     );
}
 
export default portfolio;