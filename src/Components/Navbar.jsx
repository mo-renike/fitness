import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/images/Logo.png";
import "./Footer.Nav.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        {" "}
        <Link className="logo" to="/">
          {/* <img src={Logo} alt="logo" /> */}
         <h3>FitFam</h3> 
        </Link>
      </div>

      <div className="nav__list">
        <Link to="/">Home</Link>
        <a href="#exercises">Exercises</a>
      </div>
    </div>
  );
};

export default Navbar;
