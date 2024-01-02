import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserRequest } from '../utils';

export const createUser = createAsyncThunk('auth/createUser', async function (data) {
  return await createUserRequest(data);
});

const initialState = {
  user: null,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = {
        userName: action.payload.userName,
        password: action.payload.password,
      };
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.isError;

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
