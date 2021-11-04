import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'utils/API';

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: null
};

export const findAllCashAdvance = createAsyncThunk(
  '/cash-advance/all',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get('/cash-advance');
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(res.data);
      }
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const cashAdvanceSlice = createSlice({
  name: 'cash-advance',
  initialState,
  reducers: {},
  extraReducers: {
    [findAllCashAdvance.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllCashAdvance.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllCashAdvance.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});

// export const {} =cashAdvanceSlice.actions;
export default cashAdvanceSlice.reducer;
