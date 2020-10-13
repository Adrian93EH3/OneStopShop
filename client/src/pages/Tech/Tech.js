import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import API from "../../lib/API";
import Row from "react-bootstrap/Row";
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

class Tech extends React.Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null,
      techData: [],
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
      const techData = data.data.filter((val) => {
        console.log(val.category);
        return val.category === "Tech";
      });
      console.log(techData);
      this.setState({ techData: techData });
    });
  }

  render() {
    return (
      <div>
        <CardDeck>
          {this.state.techData.map((item) => {
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
                      <img src={item.image} alt={item.name} />
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
        <Row className="spacing2"></Row>
      </div>
    );
  }
}

export default Tech;
