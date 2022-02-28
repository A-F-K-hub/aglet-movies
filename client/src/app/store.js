import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import currentUserReducer from "../reducers/users-reducer/users.reducer";

//The Global Store Setup-movieslice
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentUserReducer,
  },
});
