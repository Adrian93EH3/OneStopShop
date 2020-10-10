import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../../pages/Home/Home";
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Admin from '../../pages/Admin/Admin';


function routes() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/privateroute' component={PrivateRoute} />
                <Route exact path='/admin' component={Admin} />
            </div>
        </Router>
    )
};

export default routes;