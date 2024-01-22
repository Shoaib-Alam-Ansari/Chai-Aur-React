import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className=" col-sm-6 col-md-2 my-4 text-center text-sm-start">
            <h5 className="fs-5 text-primary">Get to Know Us</h5>
            <Link to="" className=" nav-link">
              Careers
            </Link>
            <Link to="" className="nav-link">
              Blog
            </Link>
            <Link to="" className="nav-link">
              About Amazon
            </Link>
            <Link to="" className="nav-link">
              Investor Relations
            </Link>
            <Link to="" className="nav-link">
              Amazon Devices
            </Link>
            <Link to="" className="nav-link">
              Amazon Science
            </Link>
          </div>
          <div className=" col-sm-6 col-md-2 my-4 text-center text-sm-start">
            <h5 className="fs-5 text-primary">Get to Know Us</h5>
            <Link to="" className=" nav-link">
              Careers
            </Link>
            <Link to="" className="nav-link">
              Blog
            </Link>
            <Link to="" className="nav-link">
              About Amazon
            </Link>
            <Link to="" className="nav-link">
              Investor Relations
            </Link>
            <Link to="" className="nav-link">
              Amazon Devices
            </Link>
            <Link to="" className="nav-link">
              Amazon Science
            </Link>
          </div>
          <div className=" col-sm-6 col-md-2 my-4 text-center text-sm-start">
            <h5 className="fs-5 text-primary">Get to Know Us</h5>
            <Link to="" className=" nav-link">
              Careers
            </Link>
            <Link to="" className="nav-link">
              Blog
            </Link>
            <Link to="" className="nav-link">
              About Amazon
            </Link>
            <Link to="" className="nav-link">
              Investor Relations
            </Link>
            <Link to="" className="nav-link">
              Amazon Devices
            </Link>
            <Link to="" className="nav-link">
              Amazon Science
            </Link>
          </div>

          <div className=" col-sm-6 col-md-5 d-md-flex flex-md-column justify-content-md-center col-lg-6  px-5 p-sm-0 p-md-0 pb-md-0">
            <div className="text-center text-sm-start">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, iure.
              </p>
            </div>
            <div className=" d-sm-flex gap-sm-3 d-flex gap-3 ">
              <input
                type="text"
                className=" form-control"
                placeholder="Enter Email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
          <hr />
          <div className="text-center text-sm-start d-sm-flex justify-content-sm-between">
            <span className="">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </span>

            <div className=" fs-4 d-flex gap-2 mb-4 justify-content-center align-items-center">
              <Link to="/" className=" nav-link">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>
              <Link to="/" className=" nav-link">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
              <Link to="/" className=" nav-link">
                <FontAwesomeIcon icon={faSquareTwitter} />
              </Link>
              <Link to="/" className=" nav-link">
                <FontAwesomeIcon icon={faSquareYoutube} />
              </Link>
              <Link to="/" className=" nav-link">
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
