import PORTFOLIO_DATA from './portfolio_data';

const INITIAL_STATE = {
  collections: PORTFOLIO_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;