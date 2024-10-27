import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromStorage = () => {
  try {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFavoritesFromStorage(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;