import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import API from "../../lib/API";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Admin from "../../pages/Admin/Admin";
import NotFound from "../../pages/NotFound/NotFound";
import Navigation from "../../components/Navigation/Navigation";
import Backpack from "../../pages/Backpack/backpack";
import Shoe from "../../pages/Shoe/shoe";
import Computer from "../../pages/Computer/computer";
import Clothes from "../../pages/Clothes/clothing";
import Cart from "../../pages/Cart/cart";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Footer from "../Footer/footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user, authToken },
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined },
      }));
    };

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout,
      },
      cart: [],
    };
  }

  addToCart = (item) =>
    this.setState((currentCart) => ({ cart: [...currentCart.cart, item] }));

  removeFromCart = (item) => {
    this.setState((currentCart) => {
      const indexOfItemToRemove = currentCart.cart.findIndex(
        (cartItem) => cartItem._id === item._id
      );
      console.log(indexOfItemToRemove)

      if (indexOfItemToRemove === -1) {
        return currentCart.cart;
      }

      return [
        ...currentCart.cart.slice(0, indexOfItemToRemove),
        ...currentCart.cart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then((response) => response.data)
      .then((user) =>
        this.setState((prevState) => ({ auth: { ...prevState.auth, user } }))
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className="App">
          <Navigation cart={this.state.cart} />
          <section id="intro">
            <div className="intro-overlay"></div>
            <div className="container-fluid">
              <Row>
                <Col sm={2}>
                  <Card style={{ width: "12rem" }} id="navcolumn">
                    <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Link to="/backpacks">Backpacks</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/shoes">Shoes</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/tech">Tech</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to="/clothes">Clothes</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col sm={10} className="mx-auto">
                  <Switch>
                    <Route
                      exact
                      path="/home"
                      render={(props) => (
                        <Home
                          cart={this.state.cart}
                          cartUpdate={this.addToCart}
                        />
                      )}
                    />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/admin" component={Admin} />
                    <Route
                      exact
                      path="/backpacks"
                      render={(props) => (
                        <Backpack
                          cart={this.state.cart}
                          cartUpdate={this.addToCart}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/shoes"
                      render={(props) => (
                        <Shoe
                          cart={this.state.cart}
                          cartUpdate={this.addToCart}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/tech"
                      render={(props) => (
                        <Computer
                          cart={this.state.cart}
                          cartUpdate={this.addToCart}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/clothes"
                      render={(props) => (
                        <Clothes
                          cart={this.state.cart}
                          cartUpdate={this.addToCart}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/cart"
                      render={(props) => (
                        <Cart
                          cart={this.state.cart}
                          cartUpdate={this.addToCart}
                          removeFromCart={this.removeFromCart}
                        />
                      )}
                    />
                    <Route component={NotFound} />
                  </Switch>
                </Col>
              </Row>
            </div>
          </section>
          <Footer />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
