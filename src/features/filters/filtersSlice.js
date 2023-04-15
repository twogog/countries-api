import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: '',
  region: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.country = action.payload;
    },
    addRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { addCountry, addRegion } = filtersSlice.actions;