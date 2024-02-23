import { Collection } from "types/collection";
import api from "./api";

export const apiGetCollections = () =>
  api.get<Collection[]>("main-shortcut/all?prearrangedDiscount");
