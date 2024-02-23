import { createSlice } from "@reduxjs/toolkit";
import { reduxGetBanners } from "../actions/banners";
import { Collection } from "@/@types/collection";
import { Banner } from "@/@types/banner";

const initialState: ShortcutsState = {
  banners: [],
};

const slice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(reduxGetBanners.fulfilled, (state, action) => {
      state.banners = action.payload;
    });
  },
});

export type ShortcutsState = {
  banners: Banner[];
};

export default slice.reducer;
