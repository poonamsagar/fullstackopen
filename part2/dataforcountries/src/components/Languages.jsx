import React from "react";

const Languages = ({ languages }) => (
  <>
    <h3>languages</h3>
    <ul>
      {React.Children.toArray(
        languages.map(language => <li>{language.name}</li>)
      )}
    </ul>
  </>
);
export default Languages;
