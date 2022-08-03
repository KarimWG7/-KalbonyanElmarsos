import { createSlice } from "@reduxjs/toolkit";

const initialUISatte = {
  cartIsVisible: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUISatte,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUIActions = uiSlice.actions;
export default uiSlice.reducer;
