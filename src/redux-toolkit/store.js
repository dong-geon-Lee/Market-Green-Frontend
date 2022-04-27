import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { productReducer } from "./productSlice";
import { spinnerReducer } from "./spinnerSlice";
import { cartReducer } from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    spinner: spinnerReducer,
    cart: cartReducer,
  },
});

export default store;
