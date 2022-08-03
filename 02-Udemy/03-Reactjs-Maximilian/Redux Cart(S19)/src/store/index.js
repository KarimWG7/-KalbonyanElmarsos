import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    uiSlice: uiReducer,
    cartSlice: cartReducer,
  },
});
export default store;
