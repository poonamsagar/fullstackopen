import React from "react";

const Prompt = ({ searchTerm }) =>
  searchTerm ? <div>Too many matches, specify another filter</div> : null;

export default Prompt;
