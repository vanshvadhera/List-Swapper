import { configureStore } from "@reduxjs/toolkit";
import leftSlice from "./leftSlice";
import rightSlice from "./rightSlice";

const reduxStore = configureStore({
  reducer: { left : leftSlice.reducer, right: rightSlice.reducer},
});
export default reduxStore;
