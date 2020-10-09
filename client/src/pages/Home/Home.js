import React, { Component } from "react";
import "../../components/App/App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardColumns from "react-bootstrap/CardColumns";
const featured = require("./featured.json");

class HomePage extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,  
      adaptiveHeight: true,
      centerMode: true,
    };
    return (
      <Row>
        <Col sm={4}>
          <Card style={{ width: "18rem" }} id="navcolumn">
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Backpacks</ListGroup.Item>
              <ListGroup.Item>Shoes</ListGroup.Item>
              <ListGroup.Item>Tech</ListGroup.Item>
              <ListGroup.Item>Clothes</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={3}>
          <Slider {...settings} id="slider">
            <div>
              <img src={"../images/burberrybp.png"} />
            </div>
            <div>
              <h1>2</h1>
            </div>
            <div>
              <h1>3</h1>
            </div>
            <div>
              <h1>4</h1>
            </div>
            <div>
              <h1>5</h1>
            </div>
            <div>
              <h1>6</h1>
            </div>
          </Slider>
        </Col>
        <Row>
          <CardColumns> 
           {featured.featured.map((item, key) => {
            return (
            <Card class="card">
            <Card.Img variant="top" src={`../images/${item.image}`} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Title>{item.price}</Card.Title>
                </Card.Body>
              </Card>
            )
           })}
          </CardColumns>
        </Row>
      </Row>
    );
  }
}

export default HomePage;

