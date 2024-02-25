import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectBannersState = (state: RootState) => state.banners;

export const selectBanners = createDraftSafeSelector(
  selectBannersState,
  (state) => ({
    ...state,
    banners: state.banners ?? [],
  })
);
