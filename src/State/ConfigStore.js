import { createStore, combineReducers } from "redux";
import { productReducer } from "..//Reducer/productReducer";

export const ConfigStore = () => {
  const myStore = createStore(
    combineReducers(productReducer),
    window.__REDUX_DIVTOOLS_EXTENSION__ && window.__REDUX_DIVTOOLS_EXTENSION__()
  );
  return myStore;
};



