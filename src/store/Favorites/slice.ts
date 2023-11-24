import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PeopleType } from '../../data/people';


const defaultInitialState: PeopleType[] = JSON.parse(localStorage.getItem('favorites') || '[]');


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: defaultInitialState,
  reducers: {
    addFavorite: (_, action: PayloadAction<PeopleType[]>) => {
      const newFavorites = action.payload;
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavorite } = favoritesSlice.actions;
