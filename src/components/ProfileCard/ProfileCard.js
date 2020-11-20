import React from "react";
import Card from "react-bootstrap/Card";
import "./ProfileCard.scss";

const ProfileCard = ({ profileInfo }) => {
  return (
    <Card className="profile-card">
      <Card.Img variant="top" src={profileInfo.image} />
      <Card.Body>
        <Card.Title>{profileInfo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {profileInfo.position}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
