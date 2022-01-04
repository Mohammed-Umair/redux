import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Mobiles</Link>
      <Link to="/Eshop">E-shop</Link>
      <Link to="/movies">Movies</Link>
    </div>
  );
};

export default Nav;
