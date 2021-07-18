import PortfolioOverview from "../components/portfolioOverview";
import { Route, withRouter } from "react-router-dom";
import React from "react";

const portfolio = ({match}) => {
    return (
        <div className="my-4">
            <p className="text-white text-center text-3xl uppercase ">Portfolio</p>
            <div className="text-white">
                <Route exact path={`${match.path}`} component={PortfolioOverview} />
            </div>
        </div>
     );
}
 
export default withRouter(portfolio);