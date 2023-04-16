import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Country } from "./Country";
import { loadCountries } from "../features/coutries/countriesSlicer";
import { selectVisible } from "../selectors";
import { Loading } from "./Loading";

export const Countries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => selectVisible(state.countries.list, state.filters));
  const { error, loading } = useSelector((state) => state.countries);
  useEffect(() => {
    error === 'idle' && dispatch(loadCountries());
  }, []);

// tld, languages, currencies, capital, altSpellings
// subregion, region, population, name, flags, borders
  if (error === 'failed') { 
    return (<div className="loading-and-error">
        {error}, reload the page please
      </div>);
  }

  if (loading) { return <Loading />}
  
  return (
    <div className="countries-container">
      {allCountries.map((country) => <Country key={country.name.common} country={country}/>)}
    </div>
  );
};