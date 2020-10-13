import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import API from "../../lib/API";
import {
  bounce,
  fadeIn,
  fadeInDown,
  flash,
  flipInX,
  headShake,
  jello,
  pulse,
  rollIn,
  rotateInDownLeft,
  rotateInDownRight,
  rubberBand,
  shake,
  slideInDown,
  swing,
  tada,
  wobble,
  zoomIn,
} from "react-animations";
const Animate = [
  bounce,
  fadeIn,
  fadeInDown,
  flash,
  flipInX,
  headShake,
  jello,
  pulse,
  rollIn,
  rotateInDownLeft,
  rotateInDownRight,
  rubberBand,
  shake,
  slideInDown,
  swing,
  tada,
  wobble,
  zoomIn,
];

class Home extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null,
      featuredData: [],
    };
  }

  handleClose() {
    this.setState({ show: null });
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  componentDidMount() {
    API.Products.getAllProducts().then((data) => {
      console.log(data);
      const featuredData = data.data.filter((val) => {
        console.log(val.category);
        return val.category === "Featured";
      });
      console.log(featuredData);
      this.setState({ featuredData: featuredData });
    });
  }

  render() {
    return (
      <>
        <Col className="mx-auto" sm={4}>
          <Carousel style={{ width: "23rem", height: "25rem" }} bg-light>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={"https://www.balenciaga.com/66/11/11929538wq_12_a_f.jpg"}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={"https://www.cyberpowerpc.com/images/cs/p418x/cs-450-140_400.png"}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Vans-Barbed-Floral-White-Hoodie-_167121-front-CA.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Row className="mx-auto">
          <Col sm={12}>
            <CardDeck>
              {this.state.featuredData.map((item) => {
                let randomIndex = Math.floor(Math.random() * Animate.length);
                let AnimateDiv = styled.div`
                  animation: 2s ${keyframes`${Animate[randomIndex]}`};
                `;
                return (
                  <AnimateDiv key={item._id}>
                    <Card
                      style={{ width: "15rem", height: "25rem" }}
                      onClick={() => this.handleShow(item._id)}
                    >
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Title>${item.price}</Card.Title>
                      </Card.Body>
                    </Card>
                    <Modal
                      show={this.state.show === item._id}
                      onHide={() => this.handleClose(item._id)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          {" "}
                          <img
                            src={item.image}
                            alt={item.name}
                          />
                        </Modal.Title>
                        <Modal.Title>{item.name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{item.description}</Modal.Body>
                      <Modal.Body style={{ fontWeight: "bold" }}>
                        ${item.price}
                      </Modal.Body>
                      <Modal.Footer>
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={() => {
                            this.props.cartUpdate(item);
                            this.handleClose(item._id);
                          }}
                        >
                          Add to Cart
                        </button>
                        <Button
                          variant="secondary"
                          onClick={() => this.handleClose(item._id)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
