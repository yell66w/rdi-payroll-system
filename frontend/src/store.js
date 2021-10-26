import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth/authSlice';
import employeeSlice from 'features/employee/employeeSlice';

export default configureStore({ reducer: { auth: authSlice.reducer, employees: employeeSlice } });
