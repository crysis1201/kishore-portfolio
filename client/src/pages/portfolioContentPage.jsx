import React from 'react';
import { connect } from 'react-redux';
import { selectPortfolioContent } from "../redux/portfolio/portfolio.selectors";
import PortfolioContent from "../components/portfolio-content/portfolioContent"

const PortfolioContentPage = ({collection}) => {
  return (
    <div className='collection-page'>
      <PortfolioContent collection={collection} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectPortfolioContent(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(PortfolioContentPage);