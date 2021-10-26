import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth/authSlice';
import { settingsSlice } from 'features/settings/settingsSlice';

export default configureStore({
  reducer: { auth: authSlice.reducer, settings: settingsSlice.reducer }
});
