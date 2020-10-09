import React, { Component } from "react";
import "../../components/App/App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Carousel from "react-bootstrap/Carousel";
const featured = require("./featured.json");

class HomePage extends Component {
  render() {
    return (
      <>
        <Col lg={3}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={"../images/leather.png"}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={"../images/AF1.png"}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"../images/burberrybp.png"}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Row>
          <Col>
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
                );
              })}
            </CardColumns>
          </Col>
        </Row>
      </>
    );
  }
}

export default HomePage;
