import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = createAsyncThunk(
  "product/get",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setProduct = createAsyncThunk(
  "product/add",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, payload);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messsage);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productReset: (state) => {
      state.products = null;
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = false;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
      state.products = null;
      state.error = true;
    },
  },
});

export const { productReset } = productSlice.actions;

export const productReducer = productSlice.reducer;
