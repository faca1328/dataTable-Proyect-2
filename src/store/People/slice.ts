import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PeopleType } from '../../data/people';


const defaultInitialState: PeopleType[] = JSON.parse(localStorage.getItem('people') || '[]');



const peopleSlice = createSlice({
  name: 'people',
  initialState: defaultInitialState,
  reducers: {
    loadPeople: (_, action: PayloadAction<PeopleType[]>) => {
      const newPeople = action.payload;
      localStorage.setItem('people', JSON.stringify(newPeople));
      return newPeople;
    },
  },
});

export default peopleSlice.reducer;

export const { loadPeople } = peopleSlice.actions;
