import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./SearchBar.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <InputGroup>
        <FormControl
          placeholder="candidate's name"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
