import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from "../redux/portfolio/portfolio.selectors";
import PortfolioContent from "../components/portfolio-content/portfolioContent"

const PortfolioContentPage = ({collection}) => {
  return (
    <div className='collection-page'>
      <PortfolioContent collection={collection} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(PortfolioContentPage);