import { sortCountries } from "../../helper";
export const ADD_COUNTRIES = 'ADD_COUNTRIES';
export const OPEN_COUNTRY = 'OPEN_COUNTRY';
export const ADD_STATUS = 'ADD_STATUS';
// export const ADD_STORY = 'ADD_STORY';

export const addCountries = (countries) => ({
  type: ADD_COUNTRIES,
  payload: sortCountries(countries),
});

export const openCountry = (country) => ({
  type: OPEN_COUNTRY,
  payload: country,
});

const addStatus = (status) => ({
  type: ADD_STATUS,
  payload: status,
});

export const fetchCountries = (url) => (dispatch) => {
  dispatch(addStatus({ status: 'loading', error: null }));
  try {
    setTimeout( async () => {
      const response = await fetch(url);
      if (!response.ok) {
        dispatch(addStatus({ status: 'failed', error: 'Loading failed' }));
        throw new Error('Loading failed');
      }
      const data = await response.json();
      dispatch(addStatus({ status: 'finished', error: null }));
      dispatch(addCountries(data));
    }, 2000);
  } catch (error) {
    console.error(error.message);
    dispatch(addStatus({ status: 'failed', error: error.message }))
  }
};

// export const addStory = (country) => ({
//   type: ADD_STORY,
//   payload: country,
// });