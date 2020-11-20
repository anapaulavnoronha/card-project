import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./SearchBar.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <InputGroup>
        <InputGroup.Append className="search-icon-container">
          <span className="search-icon"></span>
        </InputGroup.Append>
        <FormControl
          className="search-input shadow-none"
          placeholder="candidate's name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
