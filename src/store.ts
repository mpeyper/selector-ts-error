import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

declare module "react-redux" {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}

export const store = configureStore({ reducer: rootReducer });
