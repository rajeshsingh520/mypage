import React, { Component } from "react";
import hello from "../img/hello.svg";
import arrow from "../img/arrow.svg";
import wp from "../img/wordpress.png";
import { Link } from "react-router-dom";

function WorkIDo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="workido-container basic-container">
            <div className="work-box color">
              <h1 className="font4">
                Website <br />
                Development
              </h1>
            </div>
            <div className="work-box">
              <h1 className="font4">
                Security <br />
                Maintenance
              </h1>
            </div>
            <img src={wp} id="wp-logo" />
            <div className="work-box ">
              <h1 className="font4">
                Speed <br />
                Optimization
              </h1>
            </div>

            <div className="work-box color">
              <h1 className="font4">
                Plugin <br />
                Develioment
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkIDo;
