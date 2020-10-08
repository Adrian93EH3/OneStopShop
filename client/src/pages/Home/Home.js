import React, { Component } from 'react';
import Backpack from '../../components/Inventory/backpack';
import Shoe from '../../components/Inventory/shoe'
import '../../components/App/App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'

class HomePage extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
