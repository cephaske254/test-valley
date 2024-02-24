import { Collection } from "types/collection";
import api from "./api";
import { ItemsApiResponse } from "@/@types/api";

export const apiGetCollections = () =>
  api
    .get<ItemsApiResponse<Collection[]>>("collections?prearrangedDiscount")
    .then((a) => a.data);
