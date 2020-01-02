import React from "react";
import Languages from "./Languages";
import CityWeather from "./CityWeather";

const CountryData = ({ country }) => (
  <>
    <h1>{country.name}</h1>
    <div>capital {country.capital}</div>
    <div>population {country.population}</div>
    <Languages languages={country.languages} />

    <img
      alt="country flag"
      src={country.flag}
      width="200px"
      height="200px"
    ></img>
    <CityWeather city={country.capital} />
  </>
);
export default CountryData;
