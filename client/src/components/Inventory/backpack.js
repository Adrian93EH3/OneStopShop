import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, fadeInDown, flash, flipInX, headShake, jello, pulse, rollIn, rotateInDownLeft, rotateInDownRight, rubberBand, shake, slideInDown, swing, tada, wobble, zoomIn } from "react-animations";
const backpack = require("./backpack.json");
const Animate =[bounce, fadeIn, fadeInDown, flash, flipInX, headShake, jello, pulse, rollIn, rotateInDownLeft, rotateInDownRight, rubberBand, shake, slideInDown, swing, tada, wobble, zoomIn ]
const AnimateDiv = styled.div`
  animation: 2s ${keyframes`${rotateInDownLeft}`};
`;

class Backpack extends React.Component {
  render() {
    return (
      <div>
        <CardDeck>
          {backpack.backpack.map((item) => {
            return (
              <AnimateDiv key={item.id}>
                <Card style={{ width: "15rem", height: "25rem"}}>
                  <Card.Img variant="top" src={`../images/${item.image}`} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    {/* <Card.Text>{item.description}</Card.Text> */}
                    <Card.Title>{item.price}</Card.Title>
                  </Card.Body>
                </Card>
              </AnimateDiv>
            );
          })}
        </CardDeck>
      </div>
    );
  }
}

export default Backpack;
