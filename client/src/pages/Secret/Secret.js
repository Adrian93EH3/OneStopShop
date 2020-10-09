import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

class Secret extends Component {
  static contextType = AuthContext;



  render() {
    return (
      <div className="Secret">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
