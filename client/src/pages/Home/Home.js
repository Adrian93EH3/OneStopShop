import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, fadeInDown, flash, flipInX, headShake, jello, pulse, rollIn, rotateInDownLeft, rotateInDownRight, rubberBand, shake, slideInDown, swing, tada, wobble, zoomIn } from "react-animations";
const featured = require("./featured.json");
const Animate =[bounce, fadeIn, fadeInDown, flash, flipInX, headShake, jello, pulse, rollIn, rotateInDownLeft, rotateInDownRight, rubberBand, shake, slideInDown, swing, tada, wobble, zoomIn ]
const AnimateDiv = styled.div`
  animation: 2s ${keyframes`${rotateInDownLeft}`};
`;

class Home extends Component {
  render() {
    return (
      <>
      <Col lg={2}></Col>
        <Col sm={3}>
          <Carousel style={{ width: "16rem", height: "23rem"}}>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={"../images/leather.png"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={"../images/AF1.png"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"../images/burberrybp.png"}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
       

        <Row className="justify-content-sm-center ml-4 mr-4">
        <Col lg={11} >
          <CardDeck>
            {featured.featured.map((item) => {
              return (
                <AnimateDiv key={item.id}>
                <Card style={{ width: "15rem", height: "25rem"}}>
                  <Card.Img variant="top" src={`../images/${item.image}`} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title>{item.price}</Card.Title>
                  </Card.Body>
                </Card>
                </AnimateDiv>
              );
            })}
          </CardDeck>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
