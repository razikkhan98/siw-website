import React from "react";
import {
  FaFacebook,
  FaEvernote,
  FaGitlab,
  FaOctopusDeploy,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  // nav data
  const Navdata = [
    { name: "home", path: "/", icon: <FaFacebook /> },
    { name: "about", path: "/about", icon: <FaEvernote /> },
    { name: "service", path: "/service", icon: <FaGitlab /> },
    { name: "contact", path: "/contact", icon: <FaOctopusDeploy /> },
  ];
  return (
    <>
      <nav className="flex flex-col items-center justify-center gap-y-4 fixed bottom-0 mt-auto right-[1%] z-50 top-0 w-16 max-w-md h-screen">
        <div className="flex w-full flex-col items-center justify-center gap-y-10 h-max bg-white/10 backdrop-blur-sm text-xl px-4 py-8 rounded-full">
          {Navdata.map((link, index) => (
            <Link to={link.path}>{link.icon}</Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
