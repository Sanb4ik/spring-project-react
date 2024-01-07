// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { loginRequest } from '../utils';
//
// export const loginUser = createAsyncThunk('auth/createUser', async function (data) {
//   return loginRequest(data);
// });
//
// const initialState = {
//   accessToken: null,
//   isError: false,
// };
//
// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     resetError: (state) => {
//       state.isError = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.accessToken = action.payload.accessToken;
//       localStorage.setItem('accessToken', action.payload.accessToken);
//     });
//     builder.addCase(loginUser.rejected, (state) => {
//       state.isError = true;
//     });
//   },
// });
//
// export const selectAccessToken = (state) => state.auth.accessToken;
// export const selectError = (state) => state.auth.isError;
//
// export const { resetError } = authSlice.actions;
//
// export default authSlice.reducer;
