import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const registerUser = createAsyncThunk(
  "user/register",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(API_URL + "/register", payload);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messsage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(API_URL + "/login", payload);

      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUsers = createAsyncThunk(
  "user/getUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = true;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = true;
    },
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = true;
    },
  },
});

export const { reset } = userSlice.actions;

export const userReducer = userSlice.reducer;
