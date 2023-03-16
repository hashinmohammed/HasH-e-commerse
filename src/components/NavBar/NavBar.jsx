import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        < div className="left">
        <div className="item">
          {/* <img src="" alt="" /> */}
          <LanguageIcon />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>IND</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link className="link" to="/products/1">Women</Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/2">Men</Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/3">Children</Link>
        </div>
        </div>
        <div className="center">
          <Link className="link" to="/">HasH</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/3">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon></SearchIcon>
            <PersonOutlineOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
