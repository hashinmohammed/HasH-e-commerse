import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <div className="top">
        {" "}
        <div className="item">
          {" "}
          <h1>Categories</h1> <span>Women</span> <span>Men</span>{" "}
          <span>Shoes</span> <span>Accessories</span> <span>New Arrivals</span>{" "}
        </div>{" "}
        <div className="item">
          {" "}
          <h1>Links</h1> <span>FAQ</span> <span>Pages</span> <span>Stores</span>{" "}
          <span>Compare</span> <span>Cookies</span>{" "}
        </div>{" "}
        <div className="item">
          {" "}
          <h1>About</h1>{" "}
          <span>
            {" "}
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.{" "}
          </span>{" "}
        </div>{" "}
        <div className="item">
          {" "}
          <h1>Contact</h1>{" "}
          <span>
            {" "}
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bottom">
        {" "}
        <div className="left">
          {" "}
          <span className="logo">HasH</span>{" "}
          <span className="copyright">
            {" "}
            © Copyright 2023. All Rights Reserved{" "}
          </span>{" "}
        </div>{" "}
        <div className="right">
          {" "}
          <img src="data:image/jpeg;base64,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" alt="" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Footer;
