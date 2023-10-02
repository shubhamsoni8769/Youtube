import { createSlice } from "@reduxjs/toolkit";

const ytVideoSlice = createSlice({
  name: "ytVideos",
  initialState: {
    video: [],
  },
  reducers: {
    updateVideo: (state, action) => {
      state.video = [ ...action.payload]
    },
  },
});

export default ytVideoSlice.reducer;
export const {updateVideo} = ytVideoSlice.actions;
