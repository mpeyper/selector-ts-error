import { combineReducers } from "@reduxjs/toolkit";

const reducer1 = (state: string = "value1") => state;
const reducer2 = (state: string = "value2") => state;

export const rootReducer = combineReducers({
  key1: reducer1,
  key2: reducer2,
});
