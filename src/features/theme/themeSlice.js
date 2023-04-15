import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;