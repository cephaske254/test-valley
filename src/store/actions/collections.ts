import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetCollections } from "@/api/collections";

export const reduxGetCollections = createAsyncThunk(
  "GET_COLLECTIONS",
  apiGetCollections
);
