import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortCountries } from '../../helper/index';

const initialState = {
  list: [],
  country: {},
  loading: false,
  error: 'idle',
}
// export const fetchCountries = (url) => (dispatch) => {
//   dispatch(addStatus({ status: 'loading', error: null }));
//   try {
//     setTimeout( async () => {
//       const response = await fetch(url);
//       if (!response.ok) {
//         dispatch(addStatus({ status: 'failed', error: 'Loading failed' }));
//         throw new Error('Loading failed');
//       }
//       const data = await response.json();
//       dispatch(addStatus({ status: 'finished', error: null }));
//       dispatch(addCountries(data));
//     }, 2000);
//   } catch (error) {
//     console.error(error.message);
//     dispatch(addStatus({ status: 'failed', error: error.message }))
//   }
// };

export const loadCountries = createAsyncThunk('@@/fetchCountries',
  async (_, thunkAPI) => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return sortCountries(data);
  },
);

export const loadCountry = createAsyncThunk('@@/fetchCountry',
  async (country, thunkAPI) => {
    const response = await fetch('https://restcountries.com/v3.1/name/' + country);
    const data = await response.json();
    return data;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(loadCountries.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadCountry.fulfilled, (state, action) => {
        console.log(action.payload);
      })
  }
});

export const countriesReducer = countriesSlice.reducer;
export const {} = countriesSlice.actions;