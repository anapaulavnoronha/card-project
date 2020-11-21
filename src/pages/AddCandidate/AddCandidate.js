import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AddCandidate.scss";

const AddCandidate = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [newCandidate, setNewCandidate] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewCandidate({ name: name, position: position });
  };

  return (
    <div className="add-candidate-page">
      <Container>
        <Form>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddCandidate;
