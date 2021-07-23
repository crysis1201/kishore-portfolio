import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/portfolio/portfolio.selectors";
import PortfolioPreview from "./portfolioPreview"
import { connect } from "react-redux";
import React from "react";
import ProgressDiv from "../progressbar/progressDiv";

const PortfolioOverview = ({collections}) => {
    return ( 
        <div>
            <p className="text-white text-center text-3xl uppercase ">Portfolio</p>
              {collections.map(({ levels, id }) => (
                  <ProgressDiv key={id} levels={levels} />
              ))}
            <div className="flex flex-wrap justify-around mt-10">
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