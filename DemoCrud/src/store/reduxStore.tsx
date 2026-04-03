import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Store = global state container
export const store = configureStore({
  reducer: {
    // "counter" becomes key in global state
    counter: counterReducer,
  },
});