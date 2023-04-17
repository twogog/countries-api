import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Country } from "./Country";
import { loadCountries } from "../features/coutries/countriesSlicer";
import { selectVisible } from "../selectors";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const Countries = () => {
  const dispatch = useDispatch();
  const { countries: { list }, filters} = useSelector(state => state);
  // const allCountries = useMemo(() => selectVisible(list, filters), [list, filters]);
  const allCountries = selectVisible(list, filters);
  const { error, loading } = useSelector((state) => state.countries);
  useEffect(() => {
    if (list.length === 0) dispatch(loadCountries());
  }, [dispatch, list.length]);

// tld, languages, currencies, capital, altSpellings
// subregion, region, population, name, flags, borders
  if (error) return <Error error={error}/>
  if (loading) return <Loading />
  return (
    <div className="countries-container">
      {allCountries.map((country) => <Country key={country.name.common} country={country}/>)}
    </div>
  );
};