import React, { Component } from "react";
import hello from "../img/hello.svg";
function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div id="home-container">
            <img src={hello} id="hello-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
