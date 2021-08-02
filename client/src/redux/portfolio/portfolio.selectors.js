import { createSelector } from 'reselect';

const selectPortfolioData = portfolio => portfolio.portfolio;

export const selectPortfolioContents = createSelector(
  [selectPortfolioData],
  portfolio => portfolio.portfolioContent
);

export const selectPortfolioDataForPreview = createSelector(
  [selectPortfolioContents],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectPortfolioContent = collectionUrlParam =>
  createSelector(
    [selectPortfolioContents],
    collections => (collections ? collections[collectionUrlParam] : null)
);