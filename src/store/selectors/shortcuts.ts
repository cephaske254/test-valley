import { createSelector } from "@reduxjs/toolkit";

const selectShortcutsState = (state: RootState) => state.shortcuts;

export const selectShortcuts = createSelector(
  selectShortcutsState,
  (state) => ({
    ...state,
    shortcuts: state.shortcuts ?? [],
  })
);
