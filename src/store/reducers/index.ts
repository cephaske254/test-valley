import { combineReducers } from "redux";
import collections from "./collections";
import shortcuts from "./shortcuts";
import banners from "./banners";

const reducer = combineReducers({ banners, shortcuts, collections });

export default reducer;
