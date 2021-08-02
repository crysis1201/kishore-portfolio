import PortfolioTypes from './portfolio.types';

const INITIAL_STATE = {
  portfolioContent: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PortfolioTypes.UPDATE_PORTFOLIO_DATA:
      return {
      ...state,
      portfolioContent: action.payload
      }
      default:
        return state
    }
};

export default shopReducer;