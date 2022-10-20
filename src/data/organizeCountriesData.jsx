import { nanoid } from "nanoid";

const organizeCountriesData = (data) => {
  const countries = data.map((country) => {
    // some elements are undefine
    const capital = Array.isArray(country.capital)
      ? country.capital[0]
      : country.capital;

    return {
      id: nanoid(),
      name: country.name.common,
      capital,
      flag: country.flags.svg,
    };
  });

  return countries;
};

export default organizeCountriesData;
