import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// Images
import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";
import Team4 from "../../assets/img/team-4.jpg";

const Team = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidesToShow = 3;
  if (windowWidth < 1200 && windowWidth >= 768) {
    slidesToShow = 2;
  } else if (windowWidth < 768) {
    slidesToShow = 1;
  }
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="container mx-auto px-4 overflow-hidden">
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold ">Our Team</h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-5 ">
        <Slider {...settings}>
          {/* <!-- Team Member 1 --> */}
          <div class="bg-[#AEC670] rounded-lg shadow-md py-6 text-center ms-8">
            <div class="grid justify-items-center">
              <img
                src={Team1}
                alt="Team Member 1"
                class="w-64 rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">John Doe</h3>
              <p class="text-gray-700">Role: Software Engineer</p>

              <div class="flex text-center gap-8 mt-5">
                <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
              </div>
            </div>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div class="bg-gray-200  rounded-lg shadow-md py-6 text-center mx-12 w-[350]">
            <div className=" grid justify-items-center">
              <img
                src={Team2}
                alt="Team Member 2"
                class="w-64 rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
              <p class="text-gray-700">Role: Graphic Designer</p>

              <div class="flex text-center gap-8 mt-5">
                <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
              </div>
            </div>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div class="bg-[#AEC670] rounded-lg shadow-md py-6 text-center mx-16">
            <div className="grid justify-items-center">
              <img
                src={Team4}
                alt="Team Member 2"
                class="w-64 rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
              <p class="text-gray-700">Role: Graphic Designer</p>

              <div class="flex text-center gap-8 mt-5">
                <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
              </div>
            </div>
          </div>

          {/* <!-- Team Member 5 --> */}
          <div class="bg-gray-200 rounded-lg shadow-md py-6 text-center mx-20 ">
            <div className="grid justify-items-center">
              <img
                src={Team3}
                alt="Team Member 5"
                class="w-64 rounded-full mb-4"
              />
              <h3 class="text-xl font-semibold mb-2">Emily Brown</h3>
              <p class="text-gray-700">Role: UX Designer</p>

              <div class="flex text-center gap-8 mt-5">
                <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded-full" />
                <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded-full" />
                <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded-full" />
                <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded-full" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Team;
