import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Shop = (props) => {
  const cartTotal = props.cart.reduce(
    (total, { price = 0 }) => total + price,
    0
  );

  const amountOfItems = (id) =>
    props.cart.filter((item) => item._id === id).length;

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const newCart = props.cart.filter(distinct);

  const listItemsInCart = () =>
    newCart.map((item) => (
      <div key={item._id}>
        <div>
          <Image src={item.image} alt={item.name} thumbnail />{" "}
          {`${item.name}`} ({amountOfItems(item._id)} x ${item.price})<br/>
          <Button type="submit" onClick={() => props.removeFromCart(item)}>Remove</Button>
        </div>
      </div>
    ));

  return (
    <div className="col-sm-9 mx-auto">
        <h1>Cart</h1>
      <Card className="align-items-left">
        <ListGroup>
          {newCart.length === 0 ? (<ListGroup.Item><h1 style={{textAlign: "center"}}>Cart is Empty</h1></ListGroup.Item>) : (<ListGroup.Item>{listItemsInCart()}</ListGroup.Item>)}
        </ListGroup>
        <Card.Title>Total: ${cartTotal}</Card.Title>
        <div>
        <Button className="mx-2 mb-2" type="submit" onClick={() => {props.cart.length=0; window.location.reload()}}>Empty Cart</Button>
        
        <Button className="rickRoll mx-2 mb-2" type="submit" target="_blank" href="https://youtu.be/ub82Xb1C8os">Check Out</Button>
        </div>
      </Card>
      <Row className="spacing3"></Row>
    </div>
  );
};

export default Shop;
