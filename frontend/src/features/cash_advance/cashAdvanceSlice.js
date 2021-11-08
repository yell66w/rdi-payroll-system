import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";

const initialState = {
  data: [],
  dataToRun: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: "",
};

export const findAllCashAdvance = createAsyncThunk(
  "/cash-advance/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("cash-advance");
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

const companySlice = createSlice({
  name: "cash-advance",
  initialState,
  reducers: {
    toggleEmployeeToRun: (state, action) => {
      const filtered = state.dataToRun.filter(
        (el) => el.id !== action.payload.id
      );
      if (state.dataToRun.length === filtered.length) {
        state.dataToRun = [...state.dataToRun, action.payload];
      } else {
        state.dataToRun = filtered;
      }
    },
    resetEmployeeToRun: (state) => {
      state.dataToRun = [];
    },
  },
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
    },
  },
});

export const { toggleEmployeeToRun, resetEmployeeToRun } = companySlice.actions;
export default companySlice.reducer;
