import { createSelector } from 'reselect';

const selectShop = portfolio => portfolio.portfolio;

export const selectCollections = createSelector(
  [selectShop],
  portfolio => portfolio.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );