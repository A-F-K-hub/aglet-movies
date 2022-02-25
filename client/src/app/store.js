import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

//The Global Store Setup-movieslice
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
