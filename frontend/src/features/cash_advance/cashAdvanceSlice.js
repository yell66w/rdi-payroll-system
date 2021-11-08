import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  dataToRun: [], //BATCH IN MODAL
  batchIdsToExecute: [], //FINAL BATCH IDS
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
// TODO BACKEND GENERATE BATCH CA
export const generateCashAdvanceByBatch = createAsyncThunk(
  "/cash-advance/create",
  async (data, { rejectWithValue }) => {
    try {
      let { amount_borrowed, no_of_payments, batchIdsToExecute } = data;
      batchIdsToExecute.forEach(async (employee_id) => {
        await API.post("cash-advance", {
          amount_borrowed,
          no_of_payments,
          employee_id,
        });
      });
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const generateCashAdvance = createAsyncThunk(
  "/cash-advance/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post("cash-advance", data);
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
    toggleBatchToExecute: (state, action) => {
      const filtered = state.batchIdsToExecute.filter(
        (el) => el !== action.payload
      );
      if (state.batchIdsToExecute.length === filtered.length) {
        state.batchIdsToExecute = [...state.batchIdsToExecute, action.payload];
      } else {
        state.batchIdsToExecute = filtered;
      }
    },
    resetBatchIdsToExecute: (state) => {
      state.batchIdsToExecute = [];
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
    [generateCashAdvance.pending]: (state) => {
      state.isFetching = true;
    },
    [generateCashAdvance.fulfilled]: (state, { payload }) => {
      state.dataToRun = [];
      state.batchIdsToExecute = [];
      state.isFetching = false;
      state.isSuccess = true;
      toast.success(`Cash advance generated successfully.`);
    },
    [generateCashAdvance.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      toast.error(payload);
    },
    [generateCashAdvanceByBatch.pending]: (state) => {
      state.isFetching = true;
    },
    [generateCashAdvanceByBatch.fulfilled]: (state, { payload }) => {
      state.dataToRun = [];
      state.batchIdsToExecute = [];
      state.isFetching = false;
      state.isSuccess = true;
      toast.success(`Cash advance generated successfully.`);
    },
    [generateCashAdvanceByBatch.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      toast.error(payload);
    },
  },
});

export const {
  toggleEmployeeToRun,
  resetEmployeeToRun,
  resetBatchIdsToExecute,
  toggleBatchToExecute,
} = companySlice.actions;
export default companySlice.reducer;
