import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  isLoadingCurrentUser: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUserAction(state, action) {
      console.log({ action });
      state.currentUser = action.payload;
    },
    setIsLoadingGetCurrentUserAction(state, action) {
      state.isLoadingCurrentUser = action.payload;
    },
  },
});

export const { setCurrentUserAction, setIsLoadingGetCurrentUserAction } =
  currentUserSlice.actions;

export const currentUserSelector = (reducers) => reducers.currentUserReducer;
console.log({ currentUserSelector });

export default currentUserSlice.reducer;
