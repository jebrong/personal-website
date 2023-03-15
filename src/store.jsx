import { configureStore } from "@reduxjs/toolkit";
import { utilsReducer } from "./features/utils/utilsSlice";
export const store = configureStore({
  reducer: {
    utils: utilsReducer,
  },
});
