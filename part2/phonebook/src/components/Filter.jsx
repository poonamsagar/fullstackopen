import React from "react";

const Filter = ({ searchTerm, filterChangeHandler }) => (
  <>
    Filter shown with{" "}
    <input value={searchTerm} onChange={filterChangeHandler} />
  </>
);
export default Filter;
