import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { favReducer } from "./favReducer";

export const reducers = combineReducers({
  carStore: carReducer,
  favStore: favReducer,
});
