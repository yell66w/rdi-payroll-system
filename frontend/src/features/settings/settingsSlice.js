import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: { isOpen: false, filters: {} },
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    addFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setIsOpen, addFilter } = settingsSlice.actions;
export const settingsSelector = (state) => state.settings;
