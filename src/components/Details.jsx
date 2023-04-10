import { useDispatch, useSelector } from "react-redux";
import { openCountry } from "../store/coutries/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCountries = useSelector((state) => state.countries.list);
  const country = useSelector((state) => state.countries.country);
  const theme = useSelector((state) => state.theme);
  const { textColor, elementBg } = theme;
  const [fakeStory, setFakeStory] = useState([country?.name?.common]);
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
    borders,
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
    
  const border = borders
    ? allCountries
    .filter(((c) => borders.includes(c.cca3)))
    .map((c) => c.name.common)
    .sort()
    : [];

  const newCountry = (countryName, back = false) => {
    !back && setFakeStory([...fakeStory, countryName]);
    const countryObj = allCountries
      .filter((c) => c.name.common === countryName);
    dispatch(openCountry(...countryObj));
  };

  const backToPrev = () => {
    setFakeStory(fakeStory.slice(0, -1));
    if (fakeStory.slice(0, -1).length === 0) {
      navigate(-1);
    } else {
      newCountry(fakeStory.slice(0, -1).at(-1), true);
    }
  };

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
      className="detailed__back" onClick={backToPrev}>&larr; Back
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
            border.length === 0
            ? 'none'
            : border.map((b) =>
            <button 
              style={ buttonStyles() }
              onClick={() => newCountry(b)} key={b}>{b}
            </button>)
          }
          </div>
        </div>
    </div>
    </div>
  );
};