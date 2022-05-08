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
      console.log(data);

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
  // cartItems: cartItemStorage ? cartItemStorage : [],
  cartItems: [],
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
    [addToCart.fulfilled]: (state, action) => {
      const existItem = state.cartItems.find(
        (x) => x.product === action.payload.product
      );

      if (existItem) {
        state.cartItems.map((x) =>
          x.product === existItem.product ? action.payload : x
        );
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
      // localStorage.setItem("cartItems", JSON.stringify(action.payload));
      console.log(action.payload, "내 생각이 맞나?");
      // state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addCartProduct } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
