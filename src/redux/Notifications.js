import { createSlice } from "@reduxjs/toolkit";

export const notificationsCounter = createSlice({
  name: "notificationsCounter",
  initialState: {
    count: 0,
  },
  reducers: {
    setCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCounter } = notificationsCounter.actions;

export default notificationsCounter.reducer;
