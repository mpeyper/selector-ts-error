import { createSelector } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";

export const selector = createSelector(
  (state: DefaultRootState) => state.key1,
  (state: DefaultRootState) => state.key1,
  (key1, key2) => key1 + key2
);
