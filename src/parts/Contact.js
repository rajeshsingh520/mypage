import React from "react";
import freelancer from "../img/freelancer.svg";
import upwork from "../img/upwork.svg";
import linkedin from "../img/linkedin.svg";
import gmail from "../img/gmail.svg";
import skype from "../img/skype.svg";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="workido-container basic-container">
            <div className="work-box ">
              <div>
                <h1 className="font4">Hire Me On</h1>
                <div className="row">
                  <div className="col-12 col-sm-4 mt-3">
                    <a
                      target="_blank"
                      href="https://www.upwork.com/freelancers/~01a433f75b4ca748e7?viewMode=1"
                    >
                      <img src={upwork} className="img-fluid logo" />
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 mt-3">
                    <a
                      target="_blank"
                      href="https://www.freelancer.com/u/rajeshsingh520"
                    >
                      <img src={freelancer} className="img-fluid logo" />
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 mt-3">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/rajesh-singh-05701816
                  "
                    >
                      <img src={linkedin} className="img-fluid logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-box ">
              <div>
                <h1 className="font4">Get in touch</h1>
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-4 mt-3">
                    <a target="_blank" href="mailto:rajeshsingh520@gmail.com">
                      <img src={gmail} className="img-fluid logo" />
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 mt-3">
                    <a target="_blank" href="tel:raj520">
                      <img src={skype} className="img-fluid logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
