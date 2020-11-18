import React from "react";
import Card from "react-bootstrap/Card";

const ProfileCard = ({ profileInfo }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={profileInfo.image} />
      <Card.Body>
        <Card.Title>{profileInfo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {profileInfo.position}
        </Card.Subtitle>
        <Card.Text>{profileInfo.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
