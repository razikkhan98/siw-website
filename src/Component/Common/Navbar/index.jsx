import React, { useState } from "react";

// import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

// Images
import logo from "../../assets/img/logo/SIW LOGO (1).png"
const Nav = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 700) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <Navbar fluid className= {color ? "header header-bg" : "header"}>
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src={logo}
            className="md:ms-10  sm:ms-10 h-20"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ms-3 md:">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarToggle className="p-2" />
        <NavbarCollapse className="pe-10">
          <NavbarLink  className="me-16 font-bold" href="#Home" active>
            Home
          </NavbarLink>
          <NavbarLink className="me-16 font-bold" href="#About">About</NavbarLink>
          <NavbarLink  className="me-16 font-bold" href="#Service">Services</NavbarLink>
          <NavbarLink  className="me-16 font-bold" href="#">Pricing</NavbarLink>
          <NavbarLink  className="font-bold" href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default Nav;
