import React from "react";
import { Input } from "antd";

const Search = ({ handleSearch, paginationState, placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      value={paginationState.search}
    />
  );
};

export default Search;
