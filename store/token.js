import {createSlice} from '@reduxjs/toolkit';

export const token = createSlice({
  name: 'token',
  initialState: {
    value: '',
    loading: false,
  },
  reducers: {
    loadToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {loadToken} = token.actions;

export default token.reducer;
