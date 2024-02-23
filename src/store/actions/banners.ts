import { apiGetBanners } from "@/api/banners";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const reduxGetBanners = createAsyncThunk("GET_BANNERS", apiGetBanners);
