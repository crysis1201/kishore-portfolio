import PortfolioOverview from "../components/portfolio-overview/portfolioOverview";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PortfolioContentPage from "../pages/portfolioContentPage";
import { db, convertCollectionsSnapshotToMap } from "../components/firebase"
import { UpdatePortfolioData } from "../redux/portfolio/portfolio.action";
import { connect } from "react-redux";
import WithSpinner from "../components/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(PortfolioOverview);
const CollectionPageWithSpinner = WithSpinner(PortfolioContentPage);

const Portfolio = ({match, updatePortfolioData}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const collectionRef = db.collection('portfolioData');

        collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updatePortfolioData(collectionsMap);
        setIsLoading(false)
        });
  }, [updatePortfolioData]);

    return (   
        <div className="my-4">
            <div className="text-white">
                <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={isLoading} {...props}/>)}/>
            </div>
        </div>
     );
}

const mapDispatchStateToProp = dispatch => ({
    updatePortfolioData: collectionMap => dispatch(UpdatePortfolioData(collectionMap))
})
 
export default connect(null, mapDispatchStateToProp)(Portfolio);