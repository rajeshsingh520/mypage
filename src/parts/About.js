import React, { Component } from "react";
import hello from "../img/hello.svg";
import arrow from "../img/arrow.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="genera-container">
            <div>
              <h1 className="font4 responsive-font">
                I Know you don't want to know about me,
                <br />
                <span className="text-dark">
                  what you want to know is,
                  <br /> the WORK that i do
                </span>{" "}
                <Link to="/workido">
                  <img src={arrow} className="icon" />
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
