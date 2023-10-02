import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
