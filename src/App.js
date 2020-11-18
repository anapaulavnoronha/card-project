import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Container from "react-bootstrap/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./App.scss";

const API_KEY = process.env.REACT_APP_ACCESS_KEY;
const unsplash = new Unsplash({ accessKey: API_KEY });

let mockProfiles = [
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
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    unsplash.search
      .photos("person", 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then((json) => {
        let nProfiles = mockProfiles.length;
        const apiResults = json.results.slice(0, nProfiles);
        const apiResultsImages = apiResults.map((result) => result.urls.raw);
        mockProfiles.forEach((profile, index) => {
          profile.image = apiResultsImages[index];
        });
        setProfiles(mockProfiles);
      });
  }, []);

  return (
    <Container>
      <div className="app">
        <SearchBar />
        <div className="profiles-container">
          {profiles &&
            profiles.map((profile, index) => {
              return (
                <ProfileCard key={`profile-${index}`} profileInfo={profile} />
              );
            })}
        </div>
      </div>
    </Container>
  );
}

export default App;
