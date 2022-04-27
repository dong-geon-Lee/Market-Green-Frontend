import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    onSpinner: (state, action) => {
      state.isLoading = action.payload;
    },
    offSpinner: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { onSpinner, offSpinner } = spinnerSlice.actions;

export const spinnerReducer = spinnerSlice.reducer;
