import { combineReducers, legacy_createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { countriesReducer } from "./coutries/countriesReducer";
import { filtersReducer } from "./filters/filtersReducer";
import { themeReducer } from "./theme/themeReducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['countries']
}

const countriesPersistConfig = {
  key: 'countries',
  storage: storage,
  blacklist: ['status', 'error'],
}

const rootReducer = combineReducers({
  countries: persistReducer(countriesPersistConfig, countriesReducer),
  filters: filtersReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
