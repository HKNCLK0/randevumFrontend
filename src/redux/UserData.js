import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userData",
  initialState: {
    data: {},
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = userData.actions;

export default userData.reducer;
