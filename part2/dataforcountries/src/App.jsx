import React, { useState, useEffect } from "react";
import axios from "axios";
import Prompt from "./components/Prompt";
import CountryData from "./components/CountryData";
import CountryFilter from "./components/CountryFilter";
import CountryWithView from "./components/CountryWithView";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filterResult = !searchTerm
    ? countries
    : countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);
  const filterChangeHandler = event => {
    setSearchTerm(event.target.value);
  };
  const displayResult = () => {
    if (filterResult.length > 10) {
      return <Prompt searchTerm={searchTerm} />;
    } else if (filterResult.length === 1) {
      return <CountryData country={filterResult[0]} />;
    } else {
      return React.Children.toArray(
        filterResult.map(country => <CountryWithView country={country} />)
      );
    }
  };

  return (
    <>
      <CountryFilter
        searchTerm={searchTerm}
        filterChangeHandler={filterChangeHandler}
      />
      {displayResult()}
    </>
  );
};

export default App;
