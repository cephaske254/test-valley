import { createSelector } from "@reduxjs/toolkit";

const selectCollectionsState = (state: RootState) => state.collections;

export const selectCollections = createSelector(
  selectCollectionsState,
  (state) => ({
    ...state,
    collections: state.collections ?? [],
  })
);
