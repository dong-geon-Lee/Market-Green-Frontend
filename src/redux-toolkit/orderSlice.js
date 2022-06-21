import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

export const createOrder = createAsyncThunk(
  "Add/order",
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrderDetails = createAsyncThunk(
  "Get/order",
  async (payload, thunkAPI) => {
    const { id } = payload;

    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      const { data } = await axios.get(API_URL + `/${id}`, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const payOrder = createAsyncThunk(
  "pay/order",
  async (payload, thunkAPI) => {
    const { orderId, paymentResult } = payload;

    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      const { data } = await axios.put(
        API_URL + `/${orderId}/pay`,
        paymentResult,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserOrders = createAsyncThunk(
  "GET/userOrder",
  async (_, thunkAPI) => {
    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    const { data } = await axios.get(API_URL, config);

    return data;
  }
);

const initialState = {
  loading: false,
  success: false,
  error: false,
  order: "",
  orderDetails: "",
  orders: [],
  shippingAddress: {},
  loadingPay: false,
  successPay: false,
  errorPay: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrderReset: (state) => {
      state.order = "";
      state.orderDetails = "";
      state.success = false;
      state.loading = false;
    },
    orderPayReset: (state) => {
      state.success = "";
    },
  },

  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = false;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.success = true;
    },
    [createOrder.rejected]: (state, action) => {
      localStorage.removeItem("cartItems");

      state.loading = false;
      state.order = "";
      state.error = action.payload;
    },
    [getOrderDetails.pending]: (state) => {
      state.loading = false;
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.orderDetails = action.payload;
      state.success = true;
    },
    [getOrderDetails.rejected]: (state, action) => {
      state.loading = false;
      state.orderDetails = "";
      state.error = action.payload;
    },
    [payOrder.pending]: (state) => {
      state.loading = false;
    },
    [payOrder.fulfilled]: (state) => {
      state.loading = false;
      state.successPay = true;
    },
    [payOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getUserOrders.pending]: (state) => {
      state.loading = false;
    },
    [getUserOrders.fulfilled]: (state, action) => {
      state.loading = false;
      // state.orders.push(...action.payload);
      state.orders = action.payload;
      state.error = false;
    },
    [getUserOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createOrderReset, orderPayReset } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
