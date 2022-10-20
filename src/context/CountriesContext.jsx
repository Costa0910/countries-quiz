import React, { createContext, useEffect, useState } from "react";
import organizeCountriesData from "../data/organizeCountriesData";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState({
    data: {},
    isLoading: true,
    isError: false,
  });
  useEffect(() => {
    // This controller will allow me to avoid fetching data 2 times
    const controller = new AbortController();

    fetch("https://restcountries.com/v3.1/all", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          setCountries((prev) => ({
            ...prev,
            isLoading: false,
            isError: true,
          }));
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const countries = organizeCountriesData(data);
        setCountries((prev) => ({
          ...prev,
          data: countries,
          isLoading: false,
        }));
      });

    // cancel controller,
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
