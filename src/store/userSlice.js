import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../constant';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data);
      }

      return true;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data);
      }
      const responseData = await response.json();
      localStorage.setItem('accessToken', responseData.accessToken);
      return true;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  user: null,
  errorMessage: {
    username: '',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    age: '',
  },
  isError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetError: (state) => {
      state.isError = false;
      state.errorMessage = {
        username: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
        age: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isError = false;
      state.errorMessage = {};
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isError = true;

      const { message } = action.payload;
      if (message)
        state.errorMessage = {
          username: message.username || '',
          password: message.password || '',
          repeat_password: message.repeat_password || '',
          first_name: message.first_name || '',
          last_name: message.last_name || '',
          age: message.age || '',
        };
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isError = false;
      state.errorMessage = {};
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isError = true;
      const { message } = action.payload;
      if (message)
        state.errorMessage = {
          username: message.username || '',
          password: message.password || '',
          repeat_password: message.repeat_password || '',
          first_name: message.first_name || '',
          last_name: message.last_name || '',
          age: message.age || '',
        };
    });
  },
});

export const selectIsError = (state) => state.user.isError;
export const selectErrorMessages = (state) => state.user.errorMessage;

export default userSlice.reducer;
