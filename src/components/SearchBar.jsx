import React from "react";

const SearchBar = ({ value, setValue }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="search"
      name="search"
    />
  );
};

export default SearchBar;
