import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
const shoe = require("./shoe.json");

class Shoe extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          {shoe.shoe.map((item) => {
            return (
              <Card style={{ width: "18rem" }} key={item.id}>
                <Card.Img variant="top" src={`../images/${item.image}`} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Title>{item.price}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default Shoe;
