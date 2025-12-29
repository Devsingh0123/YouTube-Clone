import {configureStore} from "@reduxjs/toolkit"

import toggleMenuReducer from "./slices/toggleMenuSlice"



const store = configureStore({
  reducer: {
    toggleMenuReducer:toggleMenuReducer,
  },
});

export default store