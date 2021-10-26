import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllEmployees } from 'utils/employee.routes';

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: null
};

export const findAllEmployees = createAsyncThunk(
  '/employees/all',
  async (data, { rejectWithValue }) => {
    try {
      const res = await getAllEmployees();
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

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: {
    [findAllEmployees.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllEmployees.fulfilled]: (state, { payload }) => {
      state.data = payload;
      (state.isFetching = false), (state.isSuccess = true);
    },
    [findAllEmployees.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});

// export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
