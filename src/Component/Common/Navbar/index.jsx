import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      <NavbarBrand href="">
        <img src={logo} className="h-24 sm:h-16" alt="Flowbite React Logo" />
        <span className="play self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          intelligence world
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
        className={`navcol hidden  ${isNavOpen ? "block" : ""}`}
      >
        <div>
          <NavLink
            className="lg:me-16 font-bold text-white hover:text-slate-400"
            // href="#Home"
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className="lg:me-16 font-bold text-white hover:text-slate-400"
            // href="#About"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            className="lg:me-16 font-bold text-white hover:text-slate-400"
            // href="#Service"
            to="/service"
          >
            Services
          </NavLink>
        </div>
        <div>
          <NavLink
            className="lg:me-16 font-bold text-white hover:text-slate-400"
            // href="#"
            to="/tools"
          >
            Tools
          </NavLink>
        </div>
        <div>
          <NavLink
            className="lg:me-16 font-bold text-white hover:text-slate-400"
            // href="#"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
