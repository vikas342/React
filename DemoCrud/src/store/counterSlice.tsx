import { createSlice } from "@reduxjs/toolkit";

// createSlice = combines state + reducers + actions
const counterSlice = createSlice({

  name: "counter",
   // name of this slice (used internally)

  // 🧠 Initial state (your global data)
  initialState: {
    value: 0,
  },

  // 🧠 Reducers = functions that change state
  reducers: {

    increment: (state) => {
      // ⚠️ looks like mutation but it's safe (Redux Toolkit handles it)
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});


// 🔥 Export actions (used in components)
export const { increment, decrement } = counterSlice.actions;

// 🔥 Export reducer (used in store)
export default counterSlice.reducer;