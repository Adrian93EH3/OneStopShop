import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

class Navigation extends Component {
  static contextType = AuthContext;
  
  state = {
    collapsed: true,
  };
  
  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && "show"}`;
    const togglerClass = `navbar-toggler ${collapsed && "collapsed"}`;

    return (
      <>
        <div className="Navigation">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a href="#" className="navbar-brand">
              OneStopShop
            </a>
            <button
              className={togglerClass}
              onClick={this.toggleCollapse}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={targetClass} id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/home"
                    onClick={this.toggleCollapse}
                  >
                    Home
                  </Link>
                </li>
                {user && (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/admin"
                      onClick={this.toggleCollapse}
                    >
                      Admin
                    </Link>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav">
                {user ? (
                  <AuthDropdown onClick={this.toggleCollapse} />
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={this.toggleCollapse}
                    >
                      Login/Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navigation;
