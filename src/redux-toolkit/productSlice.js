import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = createAsyncThunk(
  "product/GET",
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
  "product/POST",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, payload);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messsage);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/PUT",
  async (payload, thunkAPI) => {
    const { id } = payload;

    try {
      const response = await axios.put(API_URL + `/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/DELETE",
  async (payload, thunkAPI) => {
    const { id } = payload;
    console.log(id, "id 맞지?");
    try {
      const response = await axios.delete(API_URL + `/${id}`);
      console.log(response.data, "action payload 체크");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    [setProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [setProduct.fulfilled]: (state) => {
      state.isLoading = false;
      // state.products.push(action.payload)
      state.error = false;
    },
    [setProduct.rejected]: (state) => {
      state.isLoading = false;
      state.products = null;
      state.error = true;
    },
    [updateProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      const { title, desc, price, categories, inStock } = action.payload;
      console.log(
        title,
        desc,
        price,
        categories,
        inStock,
        "콘솔 찍히는지 여부 "
      );
      state.isLoading = false;
      state.products.map((data) => {
        data.title = title;
        data.desc = desc;
        data.price = price;
        data.categories = categories;
        data.inStock = inStock;
      });
      state.error = false;
    },
    [updateProduct.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [deleteProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (data) => data._id !== action.payload.id
      );
      state.error = false;
    },
    [deleteProduct.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { productReset } = productSlice.actions;

export const productReducer = productSlice.reducer;
