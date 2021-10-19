// NOTE: https://cloudnweb.dev/2021/02/modern-react-redux-tutotials-redux-toolkit-login-user-registration/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin } from "utils/auth.routes";

export const signinUser = createAsyncThunk(
  "/auth/signin",
  async (data, { rejectWithValue }) => {
    try {
      const res = await signin(JSON.stringify(data));
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        return res.data;
      } else {
        return rejectWithValue(res.data);
      }
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    role: "",
    params: "",
    isFetching: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
  },

  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isFetching = false;
      state.isError = false;

      return state;
    },
  },
  extraReducers: {
    [signinUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      state.username = payload.username;
<<<<<<< HEAD
      state.role = payload.role;
=======
>>>>>>> Implement login
      state.isFetching = false;
      state.isSuccess = true;

      return state;
    },
    [signinUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export const { clearState } = authSlice.actions;
export const authSelector = (state) => state.auth;
