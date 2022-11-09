import React from "react";
import { Card, Button } from "react-bootstrap";

// const card = document.getElementsByClassName("shop-card");

const ShopCard = ({ title, desc, img }) => {
  return (
    <Card className={"shop-card"}>
      <Card.Img
        variant="top"
        src={`${img}`}
        style={{
          height: "200px",
        }}
      />
      <Card.Body className={"card-body"}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button
          variant="outline-secondary"
          className={"card-btn"}
          onClick={(e) => {
            // console.log("event: ", e.target.parentNode.parentNode.classes);
            e.target.parentNode.parentNode.classList.toggle("card-active");
          }}
        >
          Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
