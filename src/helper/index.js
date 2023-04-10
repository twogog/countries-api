export const setTheme = (theme, { textColor, elementBg, inputBg }) => {
  const color = theme[textColor];
  const background = theme[elementBg] || theme[inputBg];
  return { color, background };
};

export const sortCountries = (countries) => {
  const sorted = countries
    .sort((a, b) => {
      const countryA = a.name.common;
      const countryB = b.name.common;
      if (countryA < countryB) return -1;
      if (countryA > countryB) return 1;
      return 0;
    });
  return sorted;
};