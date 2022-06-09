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
      console.log(data);

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
    console.log(id, "slice id order ");
    const TOKEN = thunkAPI.getState().user.user?.accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    try {
      console.log(id, "id?");
      const { data } = await axios.get(API_URL + `/${id}`, config);

      console.log(data);
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

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
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

      // localStorage.removeItem("cartItems");
    },
    orderPayReset: (state) => {
      state.success = "";
    },
    // orderItemsPrice: (state, action) => {
    //   localStorage.setItem("itemsPrice", JSON.stringify(action.payload));

    //   state.itemsPrice = action.payload;
    // },
  },

  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = false;
    },
    [createOrder.fulfilled]: (state, action) => {
      console.log(action.payload);
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
  },
});

export const { createOrderReset, orderPayReset } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
