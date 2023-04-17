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

export const loadCountries = createAsyncThunk('@@/fetchCountries',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) return Promise.reject('failed');
      const data = await response.json();
      return sortCountries(data);
    } catch (error) {
      return Promise.reject('failed');
    }
    
  },
);

export const loadCountry = createAsyncThunk('@@/fetchCountry',
  async (country, thunkAPI) => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/name/' + country);
      if (!response.ok) return Promise.reject('failed');
      const data = await response.json();
      const getBorders = data[0]?.borders?.join();
      if (getBorders === undefined) return [data[0], []];
      const response1 = await fetch('https://restcountries.com/v3.1/alpha?codes=' + getBorders);
      if (!response1.ok) return Promise.reject('failed');
      const data1 = await response1.json();
      return [data[0], data1];
    } catch (error) {
      return Promise.reject('failed');
    }
    
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
      .addCase(loadCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadCountry.fulfilled, (state, action) => {
        const [country, borders] = action.payload;
        state.country = {
          country,
          borders: borders.map((border) => border.name.common).sort(),
        };
      })
      .addCase(loadCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addMatcher((action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher((action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        } 
      )
  }
});

export const countriesReducer = countriesSlice.reducer;
export const {} = countriesSlice.actions;