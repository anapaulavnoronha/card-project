import React, { useState, useEffect } from "react";
import "./App.scss";
import Unsplash, { toJson } from "unsplash-js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
const API_KEY = process.env.REACT_APP_ACCESS_KEY;

const unsplash = new Unsplash({ accessKey: API_KEY });

let profiles = [
  {
    name: "Ana",
    position: "Frontend Enginner",
    text:
      "Originally from Brazil, Ana started on the company this year as a Frontend Enginner",
  },
  {
    name: "Sophie",
    position: "Backend Enginner",
    text: "Shophie is joining the company to improve the product backend code!",
  },
  {
    name: "Lucas",
    position: "UX Designer",
    text: "Lucas is passionate about Design and is very detail-oriented.",
  },
];

function App() {
  const [profilePics, setProfilePics] = useState([]);

  useEffect(() => {
    unsplash.search
      .photos("person", 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then((json) => {
        setProfilePics(json.results);
      });
  }, []);

  return (
    <Container>
      <div className="app">
        {profiles.map((profile, index) => {
          return (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={profilePics[index].urls.raw} />
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>{profile.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default App;
