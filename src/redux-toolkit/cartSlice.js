import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/carts";

export const addToCart = createAsyncThunk(
  "ADD/cart",
  async (payload, thunkAPI) => {
    const { id } = payload;

    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "carts/GET",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartItemStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cartItems: cartItemStorage,
  shippingAddress: shippingAddressStorage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.product !== action.payload
      );
    },
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {},
  },
});

export const { addCartProduct } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
