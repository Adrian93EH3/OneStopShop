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
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Footer from "../Footer/footer"
import Intro from "../Intro/intro";
import LandingPage from "../../pages/LandingPage/LandingPage";
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
    };
  }

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
        <Route exact path='/' component={LandingPage} />
          <Navigation />
          <Row>
            <Route exact path="/home" component={Intro} />
            <Col lg={3}>
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
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/admin" component={Admin} />
              <Route exact path="/backpacks" component={Backpack} />
              <Route exact path="/shoes" component={Shoe} />
              <Route exact path="/tech" component={Computer} />
              <Route exact path="/clothes" component={Clothes} />
              <Route component={NotFound} />
            </Switch>
          </Row>
          <Footer />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;