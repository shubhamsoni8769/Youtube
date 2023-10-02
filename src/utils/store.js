import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import ytVideoSlice from "./ytVideoSlice";


const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        ytVideos: ytVideoSlice,
    }
});

export default store;