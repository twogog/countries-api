import { ADD_COUNTRY, ADD_REGION } from "./actions";

const initialState = {
  country: '',
  region: '',
};

export const filtersReducer = (state = initialState, action) => {
  if (action.type === ADD_REGION) {
    return { ...state, region: action.payload };
  }

  if (action.type === ADD_COUNTRY) {
    return { ...state, country: action.payload };
  }
  return state;
};