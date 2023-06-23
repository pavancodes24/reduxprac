import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { countReducer, reqresReducer } from "./reducer";

const mainReducer = combineReducers({
  count: countReducer,
  requres: reqresReducer
});
export const store = createStore(mainReducer, applyMiddleware(thunk));
