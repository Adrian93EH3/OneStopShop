import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import '../App/App.css';
const backpack = require("./backpack.json");

class Backpack extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          {backpack.backpack.map((item, key) => {
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

export default Backpack;
