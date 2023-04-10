import { ADD_COUNTRIES } from "./actions";
import { OPEN_COUNTRY } from './actions';
import { ADD_STATUS } from "./actions";
// import { ADD_STORY } from './actions';

const initialState = {
  list: [],
  country: {},
  // fakeStory: [],
  status: null,
  error: 'idle',
};

export const countriesReducer = (state = initialState, action) => {
  if (action.type === ADD_COUNTRIES) {
    return { ...state, list: action.payload };
  }

  if (action.type === OPEN_COUNTRY) {
    return { ...state, country: action.payload };
  }

  if (action.type === ADD_STATUS) {
    return { ...state, ...action.payload };
  }

  // if (action.type === ADD_STORY) {
  //   return { ...state, fakeStory: [...state.fakeStory, action.payload] };
  // }
  return state;
};