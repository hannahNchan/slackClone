import { configureStore } from '@reduxjs/toolkit';
import clickActionsReducer from './slices';

export default configureStore({
  reducer: {
    clickActions: clickActionsReducer,
  },
})