import {configureStore} from "@reduxjs/toolkit"

import toggleMenuReducer from "./slices/toggleMenuSlice"
import videosReducer from "./slices/videoSlice"



const store = configureStore({
  reducer: {
    toggleMenuReducer:toggleMenuReducer,
     videos: videosReducer,
  },
});

export default store