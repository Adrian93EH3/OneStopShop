import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="col-sm-12 social">
            <ul className="footer-social">
              <li>
                <a href="https://github.com/Adrian93EH3/Project-3">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12">
            <div className="copyright">
              <span>© Copyright 2020 </span>
              <span>Design by</span>
              <span>
              <a href="https://www.linkedin.com/in/daniel-gerrald-493b89165/">
                  Aaron
                </a>
              </span>
              <span>
              <a href="https://www.linkedin.com/in/daniel-gerrald-493b89165/">
                  Adrian
                </a>
              </span>
              <span>
              <a href="https://www.linkedin.com/in/daniel-gerrald-493b89165/">
                  Daniel
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/daniel-gerrald-493b89165/">
                  Steven
                </a>
              </span>
            </div>
          </div>

        <div id="preloader">
          <div id="loader"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
