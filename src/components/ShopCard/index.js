import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

// const card = document.getElementsByClassName("shop-card");

const ShopCard = ({ title, desc, img }) => {
  const [count, setCount] = useState(0);

  const counter = (dell) => {
    // dell && count > 0 ? setCount(count - 1) : setCount(count + 1);
    if (dell === true && count > 0) {
      setCount(count - 1);
    }

    if (dell === false) {
      setCount(count + 1);
    }
  };

  // const card = document.getElementsByClassName("shop-card");

  const selectedCard = (e, count) => {
    // if (count > 0) {
    //   e.target.parentNode.parentNode.parentNode.classList.add("card-active");
    // } else {
    //   e.target.parentNode.parentNode.parentNode.classList.remove("card-active");
    // }
    // count > 0
    //   ? e.target.parentNode.parentNode.parentNode.classList.add("card-active")
    //   : e.target.parentNode.parentNode.parentNode.classList.remove(
    //       "card-active"
    //     );
  };

  // useEffect(() => {
  //   console.log("count", count);
  //   console.log("count", card);
  //   // count > 0
  //   //   ? card.classList.add("card-active")
  //   //   : card.classList.remove("card-active");
  // }, [count]);
  return (
    <Card className={`shop-card ${count > 0 && "card-active"}`}>
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
        <div className="row justify-content-around flex-wrap card-control mt-auto">
          <Button
            variant="outline-secondary"
            className={"card-btn col-5 "}
            onClick={(e) => {
              // e.target.parentNode.parentNode.classList.toggle("card-active");
              counter(false);
              selectedCard(e);
            }}
          >
            Add
          </Button>
          <h2 className="col-2 m-auto">{count}</h2>
          <Button
            variant="outline-secondary"
            className={"card-btn col-5"}
            onClick={(e) => {
              // e.target.parentNode.parentNode.classList.toggle("card-active");
              counter(true);
              selectedCard(e);
            }}
          >
            delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
