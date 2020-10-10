import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"

function LandingPage() {  
    return (
        <div>
            <div className="wrapper">
                <div className="masthead">
                    <div className="content">
                        <h1>OneStopShop</h1>
                        <h3>eCommerce</h3>
                        <Link to="/home" className="button">ENTER!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;