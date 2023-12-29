import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../constant';

export const createUserRequest = async ({ userName, password }) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

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
    setUser: (state, action) => {
      state.user = {
        userName: action.payload.userName,
        password: action.payload.password,
      };
    },
    setError: (state) => {
      state.isError = true;
    },
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

export const { setUser, setError, resetError } = authSlice.actions;

export default authSlice.reducer;
