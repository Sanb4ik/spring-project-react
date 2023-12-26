import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = {
        userName: action.payload.userName,
        password: action.payload.password,
      };
    },
    setError: (state) => {
      state.isError = true;
    },
  },
});

export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.isError;

export const { setUser, setError } = authSlice.actions;

export default authSlice.reducer;
