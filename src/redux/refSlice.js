import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const linkSlice = createSlice({
  name: "link",
  initialState: {
    value: {
      ref: [],
      id: [],
      moveRocket: true,
      text: "Welcome to my page",
      menuClass: false,
      submenuClass: "submenu",
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
    setMenuClass: (state) => {
      state.value.menuClass = !state.value.menuClass;
    },
    setsubmenuClass: (state, action) => {
      state.value.submenuClass = action.payload;
    },
    mobileMenuFalse: (state) => {
      state.value.menuClass = false;
    },
  },
});

export const linkActions = linkSlice.actions;
export default linkSlice.reducer;
