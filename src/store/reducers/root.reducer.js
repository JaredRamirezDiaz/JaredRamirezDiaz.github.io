import { combineReducers } from "redux";
import siteReducers from "./site.reducers";

export default combineReducers({
  site: siteReducers,
});
