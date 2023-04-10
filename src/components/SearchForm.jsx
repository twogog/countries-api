import { useDispatch, useSelector } from "react-redux";
import { addCountry, addRegion } from "../store/filters/actions";
import { useState } from "react";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const countryFilter = useSelector(state => state.filters.country);
  const regionFilter = useSelector(state => state.filters.region);
  const theme = useSelector((state) => state.theme);
  const { textColor, elementBg } = theme;
  const [search, setSearch] = useState(countryFilter);
  const [hide, setHide] = useState(regionFilter);
  
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(addCountry(search));
    setSearch('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const regionValue = e.target.value;
    setHide(regionValue);
    dispatch(addRegion(regionValue));
    setSearch(countryFilter);
  };
  
  const hideOption = (option) => hide === option ? 'none' : 'block';
  const optionStyles = (option) => ({
    background: elementBg,
    color: textColor,
    display: hideOption(option),
  });

  return (
    <form autoComplete="off" onSubmit={handleSumbit} className="searchForm">
      <input
        className={ theme.status }
        style={{ color: textColor, background: elementBg }} 
        onChange={(e) => setSearch(e.target.value)} 
        value={search} name='search' type="search" 
        placeholder="Search for a country..."
      />
      <label htmlFor="region-select" />
      <select 
        style={{ color: textColor, background: elementBg }}
        defaultValue={hide} onChange={handleChange} 
        name="regions" id="region-select"
      >
        <option style={ optionStyles('')} value="">Filter by Region</option>
        <option style={ optionStyles('Africa') } value="Africa">Africa</option>
        <option style={ optionStyles('America') } value="America">America</option>
        <option style={ optionStyles('Asia')} value="Asia">Asia</option>
        <option style={ optionStyles('Europe') } value="Europe">Europe</option>
        <option style={ optionStyles('Oceania') } value="Oceania">Oceania</option>
      </select>
    </form>
  );
};
