import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: null,
};
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle(state, { payload }) {
      state.article = payload.data;
    },
  },
});
export const { setArticle } = articleSlice.actions;
export default articleSlice.reducer;
