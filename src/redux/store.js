import {configureStore} from "@reduxjs/toolkit"

import toggalMenuReducer from "./slices/toggalMenuSlice"



const store = configureStore({
  reducer: {
    toggalMenuReducer,
  },
});

export default store