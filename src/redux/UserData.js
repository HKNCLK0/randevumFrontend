import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userData",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userData.actions;

export default userData.reducer;
