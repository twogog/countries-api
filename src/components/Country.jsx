import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openCountry } from "../store/coutries/actions";

export const Country = ({ country }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { textColor, elementBg } = theme;
  const {
    region,
    population, 
    name, 
    capital,
    flags,
  } = country;
  const countryName = name.common;
  const flagsSrc = flags.png;
  const capi = capital !== undefined ? capital.join(' ') : 'none';
  return (
      <div className="country-container" style={{ background: elementBg }}>
        <Link onClick={() => dispatch(openCountry(country))} to='country'>
          <img src={flagsSrc} alt={flags.alt ? flags.alt : `The ${countryName} flag`} />
        </Link>
        <div className="contry-container__description">
          <h4><Link style={{ color: textColor }} onClick={() => dispatch(openCountry(country))} to='country'>{countryName}</Link></h4>
          <p><b>Population:</b> {population.toLocaleString()}</p>
          <p><b>Region:</b> {region}</p>
          <p><b>Capital:</b> {capi}</p>
        </div>
      </div>
  );
};