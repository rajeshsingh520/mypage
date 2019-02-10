import React, { Component } from "react";
import logo from "../img/rajesh-singh.svg";
import logo_mobile from "../img/rajesh-singh-mobile.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-fluid text-dark py-2 px-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-3 text-center text-md-left">
            <strong className="h3 bold">
              <Link to="/">
                <img
                  src={logo}
                  className="img-fluid d-none d-sm-none d-md-block"
                />
                <img
                  src={logo_mobile}
                  className="img-fluid d-md-none d-sm-block d-block"
                />
              </Link>
            </strong>
          </div>

          <div className="col-12 col-sm-12 col-md-9 text-center text-md-right mt-4 mt-md-0">
            <ul id="navigation" className="list-inline font4 mb-0 ">
              <li className="list-inline-item">
                <Link to="/about-me">About Me</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/workido">What I Do</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
