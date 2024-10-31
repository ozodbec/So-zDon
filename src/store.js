import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./features/registerSlice";
import articleSlice from "./features/counterSlice";

export const store = configureStore({
  reducer: { registerSlice, articleSlice },
});
