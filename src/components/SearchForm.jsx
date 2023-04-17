import { useDispatch, useSelector } from "react-redux";
import { addCountry, addRegion } from "../features/filters/filtersSlice";
import { useState } from "react";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const countryFilter = useSelector(state => state.filters.country);
  const regionFilter = useSelector(state => state.filters.region);
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
  
  const hideOption = (option) => hide === option ? {display: 'none'} : {display: 'block'};

  return (
    <form autoComplete="off" onSubmit={handleSumbit} className="searchForm">
      <input
        onChange={(e) => setSearch(e.target.value)} 
        value={search} name='search' type="search" 
        placeholder="Search for a country..."
      />
      <label htmlFor="region-select" />
      <select 
        defaultValue={hide} onChange={handleChange}
        name="regions" id="region-select"
      >
        <option style={ hideOption('') } value="">Filter by Region</option>
        <option style={ hideOption('Africa') } value="Africa">Africa</option>
        <option style={ hideOption('America') } value="America">America</option>
        <option style={ hideOption('Asia')} value="Asia">Asia</option>
        <option style={ hideOption('Europe') } value="Europe">Europe</option>
        <option style={ hideOption('Oceania') } value="Oceania">Oceania</option>
      </select>
    </form>
  );
};
