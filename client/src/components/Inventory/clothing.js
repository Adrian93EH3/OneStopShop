import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
const clothing = require("./clothing.json");

class Clothing extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          {clothing.clothing.map((item, key) => {
            return (
              <Card style={{ width: "18rem" }}>
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

export default Clothing;
