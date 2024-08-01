//import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>{" "}
      <Link to="/aboutus">About us</Link>{" "}
      <Link to="/contactus">Contact Us</Link>{" "}
      <Link to="/blog">Blog</Link>{" "}
    </nav>
  );
};

export default NavBar;
