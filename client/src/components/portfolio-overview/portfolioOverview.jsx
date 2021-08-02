import { createStructuredSelector } from "reselect";
import { selectPortfolioDataForPreview } from "../../redux/portfolio/portfolio.selectors";
import PortfolioPreview from "./portfolioPreview"
import { connect } from "react-redux";
import React from "react";
import ProgressDiv from "../progressbar/progressDiv";

const PortfolioOverview = ({collections}) => {
    return ( 
        <div>
            <p className="text-white text-center text-3xl ">Portfolio</p>
              {collections.map(({ levels, id }) => (
                  <ProgressDiv key={id} levels={levels} />
              ))}
            <p className="text-white text-center text-2xl mt-10">My Works</p>
            <div className="flex flex-wrap justify-around mt-10">
              {collections.map(({ id, ...otherCollectionProps }) => (
                  <PortfolioPreview key={id} {...otherCollectionProps} />
              ))}
            </div>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
  collections: selectPortfolioDataForPreview
})
 
export default connect(mapStateToProps)(PortfolioOverview);