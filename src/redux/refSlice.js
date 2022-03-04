import { createSlice } from "@reduxjs/toolkit";

const linkSlice = createSlice({
  name: "link",
  initialState: {
    value: {
      ref: [],
      id: [],
      moveRocket: true,
      text: "Welcome to my page",
    },
  },
  reducers: {
    addRef: (state, action) => {
      state.value.ref = [...state.value.ref, action.payload];
    },
    addId: (state, action) => {
      state.value.id = [...state.value.id, action.payload];
    },
    setMoveRocket: (state, action) => {
      state.value.moveRocket = action.payload;
    },
    setRocketText: (state, action) => {
      state.value.text = action.payload;
    },
  },
});

export const linkActions = linkSlice.actions;
export default linkSlice.reducer;
