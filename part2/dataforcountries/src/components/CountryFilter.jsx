import React from "react";

const CountryFilter = ({ searchTerm, filterChangeHandler }) => (
  <div>
    find countries <input value={searchTerm} onChange={filterChangeHandler} />
  </div>
);
export default CountryFilter;
