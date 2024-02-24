import { createSlice } from "@reduxjs/toolkit";
import { reduxGetCollections } from "../actions/collections";
import { Collection } from "@/@types/collection";

const initialState: ShortcutsState = {
  collections: [],
  totalCount: 0,
  loading: false,
};

const slice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(reduxGetCollections.pending, (state) => {
        state.loading = true;
      })
      .addCase(reduxGetCollections.fulfilled, (state, action) => {
        state.collections = action.payload.items.filter(
          (collection) =>
            collection.type == "SINGLE" && collection.viewType == "TILE"
        );
        state.totalCount = action.payload.totalCount;
        state.loading = false;
      })
      .addCase(reduxGetCollections.rejected, (state) => {
        state.loading = false;
      });
  },
});

export type ShortcutsState = {
  collections: Collection[];
  totalCount: number;
  loading: boolean;
};

export default slice.reducer;
