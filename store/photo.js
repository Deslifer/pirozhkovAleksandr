import {createSlice} from '@reduxjs/toolkit';

export const photo = createSlice({
  name: 'photo',
  initialState: {
    value: 'https://picsum.photos/id/1026/4621/3070',
    loading: false,
  },
  reducers: {
    loadPhoto: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {loadPhoto} = photo.actions;

export default photo.reducer;
