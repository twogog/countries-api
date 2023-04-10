
export const selectVisible = (countries, filters) => {
  const regionFilter = filters.region;
  const countryFilter = filters.country;
  const visibleCountries = countries.filter(({region}) => region.toLowerCase().includes(regionFilter.toLowerCase()))
  .filter(country => country.name.common.toLowerCase().startsWith(countryFilter.toLowerCase()));
  return visibleCountries;
};
