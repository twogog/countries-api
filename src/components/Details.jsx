import { useDispatch, useSelector } from "react-redux";
import { loadCountry } from "../features/coutries/countriesSlicer";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./Loading";

export const Details = () => {
  const { countryEl } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCountries = useSelector((state) => state.countries.list);
  const { country, borders } = useSelector((state) => state.countries.country);
  const theme = useSelector((state) => state.theme);
  const { error, loading } = useSelector((state) => state.countries)
  const { textColor, elementBg } = theme;
  useEffect(() => {
    dispatch(loadCountry(countryEl));
  }, [dispatch, countryEl]);
  if (loading) return <Loading />;
  if (!country.hasOwnProperty('name')) return null;
  const {
    tld,
    languages,
    currencies, 
    capital,
    subregion,
    region,
    population,
    name,
    flags,
  } = country;
  const countryName = name.common;
  const flagsSrc = flags.png;
  const capi = capital !== undefined ? capital.join(' ') : 'none';

  const nativeName = name.nativeName !== undefined
    ? Object.values(name.nativeName).at(-1).common
    : 'none';

  const currencie = currencies !== undefined
    ? Object.values(currencies)
    .map((c) => c.name)
    .sort()
    .join(', ')
    : 'none';

  const language = languages !== undefined 
    ? Object.values(languages).sort().join(', ')
    : 'none';
  
  const buttonStyles = () => ({
    background: elementBg,
    color: textColor,
  });
  // tld, languages, currencies, capital, altSpellings
  // subregion, region, population, name, flags, borders, cca3
  return (
    <div style={{ color: textColor }} className='inner-wrapper detailed__inner-wrapper'>
    <button 
      style={ buttonStyles()}
      className="detailed__back" onClick={() => navigate(-1)}>&larr; Back
    </button>
    <div className="country-detailed">
      <img src={flagsSrc} alt={flags.alt ? flags.alt : `The ${countryName} flag`} />
        <div className="country-detailed__description">
          <div className="desc__flex">
            <div className="country-detailed__col">
              <h4>{countryName}</h4>
              <p><b>Native name:</b> {nativeName}</p>
              <p><b>Population:</b> {population.toLocaleString()}</p>
              <p><b>Region:</b> {region}</p>
              <p><b>Sub Region:</b> {subregion ? subregion : 'none'}</p>
              <p><b>Capital:</b> {capi}</p>
            </div>
            <div className="country-detailed__col">
              <p><b>Top Level Domain:</b> {tld}</p>
              <p><b>Currencies:</b> {currencie}</p>
              <p><b>Languages:</b> {language}</p>
            </div>
          </div>
          <div className="country-detailed__border"><b>Border countries:</b> {
            borders.length === 0
            ? 'none'
            : borders.map((borderCountry) =>
            <Link 
              style={ buttonStyles() }
              to={'../country/' + borderCountry}
              key={borderCountry}>{borderCountry}
            </Link>)
          }
          </div>
        </div>
    </div>
    </div>
  );
};