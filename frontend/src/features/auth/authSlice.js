import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signin } from 'utils/auth.routes';

export const signinUser = createAsyncThunk('/auth/signin', async (data, { rejectWithValue }) => {
  try {
    const res = await signin(JSON.stringify(data));
    if (res.status === 200) {
      data = { token: res.data.accessToken, role: res.data.role };
      localStorage.setItem('rdi-auth', JSON.stringify(data));
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
});

const initialState = {
  username: '',
  role: '',
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isFetching = false;
      state.isError = false;

      return state;
    },
    logout: () => initialState
  },
  extraReducers: {
    [signinUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      state.username = payload.username;
      state.role = payload.role;
      state.isFetching = false;
      state.isSuccess = true;
      toast?.success(`Welcome ${payload.username}`);
    },
    [signinUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
      toast?.error(state.errorMessage);
    }
  }
});

export const { clearState, logout } = authSlice.actions;
export const authSelector = (state) => state.auth;
