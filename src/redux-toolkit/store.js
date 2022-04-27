import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { productReducer } from "./productSlice";
import { spinnerReducer } from "./spinnerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    spinner: spinnerReducer,
  },
});

export default store;
