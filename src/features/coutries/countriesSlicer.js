import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortCountries } from '../../helper/index';

const initialState = {
  list: [],
  country: {
    country: {},
    borders: [],
  },
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
    const getBorders = data[0]?.borders?.join();
    if (getBorders === undefined) return [data[0], []];
    const response1 = await fetch('https://restcountries.com/v3.1/alpha?codes=' + getBorders);
    const data1 = await response1.json();
    return [data[0], data1];
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
      })
      .addCase(loadCountry.fulfilled, (state, action) => {
        const [country, borders] = action.payload;
        state.country = {
          country,
          borders: borders.map((border) => border.name.common).sort(),
        };
      })
      .addMatcher((action) => action.type.endsWith('/fulfilled'),
        (state) => { state.loading = false }
      )
      .addMatcher((action) => action.type.endsWith('/pending'),
        (state) => { state.loading = true} 
      )
  }
});

export const countriesReducer = countriesSlice.reducer;
export const {} = countriesSlice.actions;