import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../redux/refSlice";

export const store = configureStore({
  reducer: {
    link: linkReducer,
  },
});
