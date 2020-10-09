import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
const computer = require("./computer.json");

class Computer extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          {computer.computer.map((item) => {
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

export default Computer;