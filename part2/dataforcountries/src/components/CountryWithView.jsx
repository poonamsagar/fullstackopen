import React, { useState } from "react";
import CountryData from "./CountryData";

const CountryWithView = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => setShowDetails(!showDetails);
  return (
    <>
      <div>
        {country.name}
        <button onClick={toggleShowDetails}>
          {!showDetails ? "show" : "hide"}
        </button>
        {showDetails ? <CountryData country={country}></CountryData> : null}
      </div>
    </>
  );
};
export default CountryWithView;
