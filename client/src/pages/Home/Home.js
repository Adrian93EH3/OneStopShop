<<<<<<< HEAD
import React, { Component } from "react";
import Backpack from "../../components/Inventory/backpack";
import "../../components/App/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
=======
import React, { Component } from 'react';
import Backpack from '../../components/Inventory/backpack';
import Shoe from '../../components/Inventory/shoe'
import '../../components/App/App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
>>>>>>> b8d05b30a66b139d8d3fa2e10da63fe8327f6c8c
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";

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
<<<<<<< HEAD
          <Card style={{ width: "18rem" }} id="navcolumn">
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Backpacks</ListGroup.Item>
              <ListGroup.Item>Shoes</ListGroup.Item>
              <ListGroup.Item>Tech</ListGroup.Item>
              <ListGroup.Item>Clothes</ListGroup.Item>
            </ListGroup>
          </Card>
=======
        <Card style={{ width: '18rem' }} id="navcolumn">
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Backpacks</ListGroup.Item>
    <ListGroup.Item>Shoes</ListGroup.Item>
    <ListGroup.Item>Tech</ListGroup.Item>
    <ListGroup.Item>Clothes</ListGroup.Item>
  </ListGroup>
</Card>
          {/* <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
  </Nav.Link>
          </Nav> */}

          
>>>>>>> b8d05b30a66b139d8d3fa2e10da63fe8327f6c8c
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
        <Row></Row>
        <CardDeck id="carddeck">
          <Card class="card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>
<<<<<<< HEAD
=======
      <CardDeck id="carddeck">
  <Card class="card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={`../images/${item.image}`} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>



        </Row>


>>>>>>> b8d05b30a66b139d8d3fa2e10da63fe8327f6c8c
    );
  }
}

export default HomePage;
