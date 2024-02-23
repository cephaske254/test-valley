import { Shortcut } from "types/shortcut";
import api from "./api";

export const apiGetShortcuts = () =>
  api.get<Shortcut[]>("main-shortcut/all").then((a) => a.data);
