import { createSlice } from '@reduxjs/toolkit'

export const clickActionsSlice = createSlice({
  name: 'clickActions',
  initialState: {
    channelsSideBar: true,
  },
  reducers: {
    openAndclose: (state) => {
      state.channelsSideBar = !state.channelsSideBar;
    }
  },
});

export const { openAndclose } = clickActionsSlice.actions

export default clickActionsSlice.reducer;
