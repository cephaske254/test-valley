import { createSlice } from "@reduxjs/toolkit";
import { reduxGetShortcuts } from "../actions/shortcuts";
import { Shortcut } from "@/@types/shortcut";

const initialState: ShortcutsState = {
  shortcuts: [],
};

const slice = createSlice({
  name: "shortcuts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(reduxGetShortcuts.fulfilled, (state, action) => {
      state.shortcuts = action.payload
    });
  },
});

export type ShortcutsState = {
  shortcuts: Shortcut[];
};

export default slice.reducer;
