import { configureStore } from '@reduxjs/toolkit';
import clickActionsReducer from './slices';
import userActionsSlice from './slices/users';

export default configureStore({
  reducer: {
    clickActions: clickActionsReducer,
    userActions: userActionsSlice,
  },
})