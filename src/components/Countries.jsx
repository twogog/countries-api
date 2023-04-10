import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Country } from "./Country";
import { fetchCountries } from "../store/coutries/actions";
import { selectVisible } from "../store/selectors";

export const Countries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => selectVisible(state.countries.list, state.filters));
  const { error, status } = useSelector((state) => state.countries);
  useEffect(() => {
    status === null && dispatch(fetchCountries('https://restcountries.com/v3.1/all'));
  }, []);

// tld, languages, currencies, capital, altSpellings
// subregion, region, population, name, flags, borders
  if (status === 'failed') { 
    return (<div className="loading-and-error">
        {error}, reload the page please
      </div>);
  }

  if (status === 'loading') { 
    return (
      <div className="loading-and-error">
        <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="countries-container">
      {allCountries.map((country) => <Country key={country.name.common} country={country}/>)}
    </div>
  );
};