import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../redux/portfolio/portfolio.selectors";
import PortfolioPreview from "./portfolioPreview"
import { connect } from "react-redux";
import React from "react";
import ProgressDiv from "./progressDiv";

const PortfolioOverview = ({collections}) => {
    console.log(collections.level)
    return ( 
        <div>
           {collections.map(({ levels, id, ...otherCollectionProps }) => (
               <ProgressDiv key={id} levels={levels} />
            ))}
            <div className="flex justify-between mt-10">
              {collections.map(({ id, ...otherCollectionProps }) => (
                <PortfolioPreview key={id} {...otherCollectionProps} />
              ))}
            </div>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(PortfolioOverview);