import React, { useState, useEffect } from "react";
import { FaFacebook, FaEvernote, FaFacebookMessenger } from "react-icons/fa6";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const list = document.querySelectorAll(".list");

    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      setActiveIndex(Array.from(list).indexOf(this));
    }

    list.forEach((item) => item.addEventListener("click", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);
  return (
    <>
      <div className="body">
        <div className="navigation">
          <ul>
            <li class="list active">
            <a href="#">
                    <span class="icon">
                        {/* <ion-icon name="home-outline"></ion-icon> */}
                        <FaFacebook/>
                    </span>
                    <span class="text">Home</span>
                    <span class="circle"></span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                    <FaFacebook/>                    </span>
                    <span class="text">Profile</span>
                    <span class="circle"></span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                    <FaFacebook/>                    </span>
                    <span class="text">Profile</span>
                    <span class="circle"></span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                    <FaFacebook/>                    </span>
                    <span class="text">Profile</span>
                    <span class="circle"></span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                    <FaFacebook/>
                    </span>
                    <span class="text">Profile</span>
                    <span class="circle"></span>
                </a>
            </li>
           
            <div class="indicator"></div>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;
