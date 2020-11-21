import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Container from "react-bootstrap/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import history from "./history";
import "./App.scss";

const API_KEY = process.env.REACT_APP_ACCESS_KEY;
const unsplash = new Unsplash({ accessKey: API_KEY });

let mockProfiles = [
  {
    name: "Ana",
    position: "Frontend Enginner",
  },
  {
    name: "Sophie",
    position: "Backend Enginner",
  },
  {
    name: "Lucas",
    position: "UX Designer",
  },
  {
    name: "Felipe",
    position: "Project Manager",
  },
  {
    name: "Leo",
    position: "Frontend Enginner",
  },
];

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

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
        setFilteredProfiles(mockProfiles);
      });
  }, []);

  const handleSearchCandidate = (value) => {
    let filteredProfiles = profiles.filter((profile) => {
      return profile.name.toLowerCase().includes(value.toLocaleLowerCase());
    });
    setFilteredProfiles(filteredProfiles);
  };

  return (
    <Container>
      <div className="app">
        <div className="action-bar">
          <SearchBar handleSearch={handleSearchCandidate} />
          <button
            className="btn-add"
            onClick={() => history.push("/add-candidate")}
          >
            Add candidate
          </button>
        </div>
        <div className="profiles-container">
          {filteredProfiles &&
            filteredProfiles.map((profile, index) => {
              return (
                <ProfileCard key={`profile-${index}`} profileInfo={profile} />
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default App;
