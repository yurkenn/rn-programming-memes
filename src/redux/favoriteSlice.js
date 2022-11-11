import {createSlice} from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter(
        favorite => favorite.title !== action.payload.title,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
