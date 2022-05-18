import {createSlice} from '@reduxjs/toolkit';

export const data = createSlice({
  name: 'data',
  initialState: {
    value: [],
    loading: false,
  },
  reducers: {
    loadItems: (state, action) => {
      state.value = action.payload.map(item => {
        return {
          id: item.id,
          author: item.author,
          download_url: item.download_url,
          favorite: false,
          favIcon: ' \n☆',
        };
      });
    },
    favItem: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload) {
          item.favorite = !item.favorite;
          if (item.favorite) {
            item.favIcon = ' \n★';
          } else {
            item.favIcon = ' \n☆';
          }
        }
        return item;
      });
      state.value = newValue;
    },
    titleChanged: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload[0]) {
          item.author = action.payload[1];
        }
        return item;
      });
      state.value = newValue;
    },
  },
});

export const {loadItems, favItem, titleChanged} = data.actions;

export default data.reducer;
