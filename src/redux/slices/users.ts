import { createSlice } from '@reduxjs/toolkit'

export const userActionsSlice = createSlice({
    name: 'userActions',
    initialState: {
      user: { 
        given_name: '',
        family_name: '',
        email: '',
        picture: ''
      },
    },
    reducers: {
      addUser: (state, action) => {
        state.user.given_name = action.payload.given_name;
        state.user.family_name = action.payload.family_name;
        state.user.email = action.payload.email;
        state.user.picture = action.payload.picture;
      },
      deleteUser: (state) => {
        state.user.given_name = '';
        state.user.family_name = '';
        state.user.email = '';
        state.user.picture = '';
      }
    },
  });

export const { addUser, deleteUser } = userActionsSlice.actions;
export const selectUser = (state) => state.userActions.user;
export default userActionsSlice.reducer;
