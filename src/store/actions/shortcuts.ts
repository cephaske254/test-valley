import { apiGetShortcuts } from "@/api/shortcuts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const reduxGetShortcuts = createAsyncThunk(
  "GET_SHORTCUTS",
  apiGetShortcuts
);
