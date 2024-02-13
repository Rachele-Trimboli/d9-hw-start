import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import searchedReducer from "../reducers/searched";

const globalReducer = combineReducers({
  favourites: favouritesReducer,
  searched: searchedReducer,
});

const store = configureStore({
  reducer: globalReducer,
});
export default store;
