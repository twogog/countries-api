import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { countriesReducer } from "./features/coutries/countriesSlicer";
import { themeReducer } from "./features/theme/themeSlice";
import { filtersReducer } from "./features/filters/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['countries']
// }

// const countriesPersistConfig = {
//   key: 'countries',
//   storage: storage,
//   blacklist: ['status', 'error'],
// }

const rootReducer = combineReducers({
  // countries: persistReducer(countriesPersistConfig, countriesReducer),
  countries: countriesReducer,
  filters: filtersReducer,
  theme: themeReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// export const persistor = persistStore(store);
