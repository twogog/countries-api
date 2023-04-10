export const ADD_REGION = 'ADD_REGION';
export const ADD_COUNTRY = 'ADD_COUNTRY';

export const addRegion = (region) => ({
  type: ADD_REGION,
  payload: region,
});

export const addCountry = (country) => ({
  type: ADD_COUNTRY, 
  payload: country,
});