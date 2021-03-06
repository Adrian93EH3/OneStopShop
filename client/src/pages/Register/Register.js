import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';

class Register extends Component {
  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password, confirm, signUpCode) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(email, password, signUpCode)
      .then(response => response.data)
      .then(() => {
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/login" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div className='col-sm-8 mx-auto Register'>
        <div className='row'>
          <div className='col'>
            <h1>Register</h1>
          </div>
        </div>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <RegistrationForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      <Row className="spacing"></Row>
      </div>
    );
  }
}

export default Register;
