import { createSlice } from "@reduxjs/toolkit";

const initialUISatte = {
  cartIsVisible: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUISatte,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartUIActions = uiSlice.actions;
export default uiSlice.reducer;
