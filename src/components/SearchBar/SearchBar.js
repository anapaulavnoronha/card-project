import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <InputGroup>
        <FormControl placeholder="candidate's username" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
