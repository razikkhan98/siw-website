import React from "react";

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

import about from "../../assets/img/about-1.jpg";
const About = () => {
  return (
    <>
      <section class="bg1 py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#344C11] rounded ">
              <div class="flex justify-end  items-center">
                <img
                  src={about}
                  alt="About Image"
                  class="rounded-lg shadow-lg w-[600px] h-[600px] "
                />
              </div>
            </div>
            <div class="flex flex-col justify-center  ps-6 ">
              <h2 class="text-3xl font-bold mb-4 text-[#344C11] ">About Us</h2>
              <p class="text-lg text-[#344C11] mb-4">
                This is a simple about section. You can provide information
                about your company or yourself here. Make sure to use meaningful
                content to engage your audience.
              </p>
              <p class="text-lg  text-[#344C11]">
                Use this space to talk about your mission, values, and the
                unique aspects of your business or personal brand.
              </p>
              <div class="flex gap-8 mt-5">
                <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
                <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#344C11] text-[#AEC670] hover:text-[#1A2902] rounded" />
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  class="text-[#344C11] hover:text-[#AEC670] border border-[#344C11] hover:bg-[#344C11] focus:ring-4 focus:outline-none focus:ring-[#AEC670] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* <div className="flex">
            <div class="counter-container">
              <i class="fab fa-instagram fa-3x"></i>
              <div class="counter" data-target="12000"></div>
              <span>Instagram Followers</span>
            </div>
            <div class="counter-container">
              <i class="fab fa-youtube fa-3x"></i>
              <div class="counter" data-target="5000"></div>
              <span>YouTube Subscribers</span>
            </div>
            <div class="counter-container">
              <i class="fab fa-facebook fa-3x"></i>
              <div class="counter" data-target="7500"></div>
              <span>Facebook Fans</span>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default About;
