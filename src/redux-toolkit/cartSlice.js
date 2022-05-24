import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const addToCart = createAsyncThunk(
  "ADD/cart",
  async (payload, thunkAPI) => {
    const {
      id: { id },
      quantity,
    } = payload;

    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      const { data } = await axios.get(API_URL + `/${id}`, config);

      return {
        product: data._id,
        title: data.title,
        img: data.img,
        price: data.price,
        inStock: data.inStock,
        quantity,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartItemStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressStorage = localStorage.getItem("shipping")
  ? JSON.parse(localStorage.getItem("shipping"))
  : {};

// const paymentMethodStorage = localStorage.getItem("paymentMethod")
//   ? JSON.parse(localStorage.getItem("paymentMethod"))
//   : "";

const initialState = {
  cartItems: cartItemStorage,
  shippingAddress: shippingAddressStorage,
  paymentMethod: "",
  itemsPrice: "",
  taxPrice: "",
  shippingPrice: "",
  totalPrice: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.product !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteStorage: (state) => {
      state.cartItems = [];
    },
    addShippingInfo: (state, action) => {
      state.shippingAddress = action.payload;

      localStorage.setItem("shipping", JSON.stringify(action.payload));
    },
    deleteShipping: (state) => {
      state.shippingAddress = {};
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;

      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
    deletePaymentMethod: (state) => {
      localStorage.removeItem("paymentMethod");

      state.paymentMethod = "";
    },
    cartItemPrice: (state) => {
      state.itemsPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      const existItem = state.cartItems?.find(
        (x) => x.product === action.payload.product
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? action.payload : x
        );

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        console.log(action.payload);
        state.cartItems.push(action.payload);

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const {
  removeFromCart,
  deleteStorage,
  addShippingInfo,
  deleteShipping,
  getShippingInfo,
  savePaymentMethod,
  deletePaymentMethod,
  cartItemPrice,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
