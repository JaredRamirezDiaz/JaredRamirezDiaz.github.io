import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root.reducer";

const middlewares = [thunk];
const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(
  applyMiddleware(...middlewares),
  ...enhancerList
);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

export default initStore;
