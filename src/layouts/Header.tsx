import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logistics UK" className="logo" />
    </header>
  );
};

export default Header;
