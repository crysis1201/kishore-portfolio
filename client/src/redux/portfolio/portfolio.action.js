import PortfolioTypes from "./portfolio.types";

export const UpdatePortfolioData = collectionMap => ({
    type: PortfolioTypes.UPDATE_PORTFOLIO_DATA,
    payload: collectionMap
})
