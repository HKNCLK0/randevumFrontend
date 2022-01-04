import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    KVKK: false,
    announcement: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setKVKK: (state) => {
      state.KVKK = !state.KVKK;
    },
    setAnnouncement: (state) => {
      state.announcement = !state.announcement;
    },
  },
});

export const {
  setName,
  setSurname,
  setEmail,
  setPassword,
  setPhone,
  setKVKK,
  setAnnouncement,
} = registerSlice.actions;

export default registerSlice.reducer;
