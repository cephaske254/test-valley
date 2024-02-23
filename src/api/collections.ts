import { Collection } from "types/collection";
import api from "./api";
import { ItemsApiResponse } from "@/@types/api";

export const apiGetCollections = () =>
  api
    .get<ItemsApiResponse<Collection[]>>("main-shortcut/all?prearrangedDiscount")
    .then((a) => a.data);
