import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopCard = ({title,desc,img}) => {
  return (
    <Card className={"shop-card"}>
      <Card.Img variant="top" src={`${img}`} style={{
          height:"200px"
      }}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="outline-secondary">Go To</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
