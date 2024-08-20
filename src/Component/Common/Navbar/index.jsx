import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import logo from "../../assets/img/logo/SIW LOGO (1).png";

const Nav = () => {
  const [color, setColor] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 700) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar fluid className={color ? "header header-bg" : "header"}>
      <NavbarBrand href="https://flowbite-react.com">
        <img src={logo} className="h-24 sm:h-16" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ms-3">
          Intelligence World
        </span>
      </NavbarBrand>

      {/* Toggle Button for Medium and Small Screens */}
      <button
        className={`navbar-toggle  ${isNavOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Navbar Links */}
      <NavbarCollapse
        className={`navcol hidden lg:flex lg:items-center  ${
          isNavOpen ? "block" : ""
        }`}
      >
        <NavbarLink className="lg:me-16 font-bold  text-white hover:text-slate-400" href="#Home">
          Home
        </NavbarLink>
        <NavbarLink className="lg:me-16 font-bold text-white hover:text-slate-400" href="#About">
          About
        </NavbarLink>
        <NavbarLink className="lg:me-16 font-bold text-white hover:text-slate-400" href="#Service">
          Services
        </NavbarLink>
        <NavbarLink className="lg:me-16 font-bold text-white hover:text-slate-400" href="#">
          Pricing
        </NavbarLink>
        <NavbarLink className="lg:me-16 font-bold text-white hover:text-slate-400" href="#">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;

;
