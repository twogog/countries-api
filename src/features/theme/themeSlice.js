import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    changeTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;