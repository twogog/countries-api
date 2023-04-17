import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { countriesReducer } from "./features/coutries/countriesSlicer";
import { themeReducer } from "./features/theme/themeSlice";
import { filtersReducer } from "./features/filters/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
  // blacklist: ['countries'],
}

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

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
