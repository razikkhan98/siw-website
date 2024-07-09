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
import logo from "../../assets/img/logo/mylogosiw.png"
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
      <Navbar fluid rounded className={color ? "header header-bg" : "header"}>
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src={logo}
            className="ms-10 h-24 sm:h-16"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ms-3">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default Nav;
