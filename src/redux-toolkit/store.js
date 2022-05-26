import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { productReducer } from "./productSlice";
import { spinnerReducer } from "./spinnerSlice";
import { cartReducer } from "./cartSlice";
import { orderReducer } from "./orderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    spinner: spinnerReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
