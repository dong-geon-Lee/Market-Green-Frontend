import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = createAsyncThunk(
  "products/GET",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/GET",
  async (payload, thunkAPI) => {
    const productId = payload;
    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const { data } = await axios.get(API_URL + `/${productId}`, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const setProduct = createAsyncThunk(
  "product/POST",
  async (payload, thunkAPI) => {
    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      const { data } = await axios.post(API_URL, payload, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/PUT",
  async (payload, thunkAPI) => {
    const { id, formData } = payload;

    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      const { data } = await axios.put(API_URL + `/${id}`, formData, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/DELETE",
  async (payload, thunkAPI) => {
    const { id } = payload;

    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      const response = await axios.delete(API_URL + `/${id}`, config);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addReview = createAsyncThunk(
  "review/ADD",
  async (payload, thunkAPI) => {
    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    const { _id, name } = thunkAPI.getState().user.user;

    const { id, rating, comment } = payload;

    const ratingData = {
      name,
      rating,
      comment,
      user: _id,
    };

    try {
      const { data } = await axios.post(
        API_URL + `/${id}/review`,
        ratingData,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "review/Delete",
  async (payload, thunkAPI) => {
    const { id, numReviews, rating } = payload;
    const { _id } = thunkAPI.getState().product.product;
    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    console.log(id, numReviews, rating);
    try {
      await axios.delete(
        API_URL + `/review/${id}?numReviews=${numReviews}&rating=${rating}`
      );

      const { data } = await axios.get(API_URL + `/${_id}`, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getReviews = createAsyncThunk(
  "review/Get",
  async (_, thunkAPI) => {
    const { _id } = thunkAPI.getState().product.product;

    try {
      const { data } = await axios.get(API_URL + `/review/${_id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  products: [],
  product: "",
  isLoading: false,
  error: false,
  message: "",
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
    reviewReset: (state) => {
      state.message = false;
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
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = false;
    },
    [getProduct.rejected]: (state) => {
      state.isLoading = false;
      state.product = null;
      state.error = true;
    },
    [setProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [setProduct.fulfilled]: (state) => {
      state.isLoading = false;
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
      const { id, title, desc, price, inStock, img } = action.payload;

      state.isLoading = false;
      state.products &&
        state.products.map((data) => {
          if (data._id === id) {
            data.img = img;
            data.title = title;
            data.desc = desc;
            data.price = price;
            data.inStock = inStock;
          }
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
    [addReview.pending]: (state) => {
      state.isLoading = true;
    },
    [addReview.fulfilled]: (state, action) => {
      console.log(action.payload, "review ");

      state.isLoading = false;
      state.product = [action.payload].map((data) => data);

      //      state.products.map((data) => {
      //   if (data._id === id) {
      //     data.img = img;
      //     data.title = title;
      //     data.desc = desc;
      //     data.price = price;
      //     data.inStock = inStock;
      //   }
      // });
      state.error = false;
    },
    [addReview.rejected]: (state, action) => {
      state.isLoading = true;
      state.message = action.payload;
      state.error = false;
    },
    [deleteReview.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = false;
    },
    [deleteReview.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [getReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = false;
    },
    [getReviews.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const { productReset, reviewReset } = productSlice.actions;

export const productReducer = productSlice.reducer;
