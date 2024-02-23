import { Banner } from "@/@types/banner";
import api from "./api";

export const apiGetBanners = () => api.get<Banner[]>("main-banner/all");
