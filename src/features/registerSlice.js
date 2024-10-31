import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};
const registerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      console.log(payload);
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("userLogin", JSON.stringify(payload));
    },
    removeUser(state, { payload }) {
      console.log(payload);
      state.user = payload;
    },
  },
});
export const { setUser, removeUser } = registerSlice.actions;
export default registerSlice.reducer;
