import React from "react";

// Icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaUsersCog,
  FaUsers,
  FaThumbsUp,
  FaTrophy,
} from "react-icons/fa";

import about from "../../assets/img/about-1.jpg";
const About = () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });

  return (
    <>
      <section id="about" class="bg1 py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#02315e] rounded ">
              <div class="flex justify-end  items-center">
                <img
                  src={about}
                  alt="About Image"
                  class="rounded-lg shadow-lg w-[600px] h-[600px] "
                />
              </div>
            </div>
            <div class="flex flex-col justify-center  ps-6 ">
              <h2 class="text-3xl font-bold mb-4 text-[#02315e] ">About Us</h2>
              <p class="text-lg mb-4">
                This is a simple about section. You can provide information
                about your company or yourself here. Make sure to use meaningful
                content to engage your audience.
              </p>
              <p class="text-lg ">
                Use this space to talk about your mission, values, and the
                unique aspects of your business or personal brand.
              </p>
              <div class="flex gap-8 mt-5">
                <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  class="text-[#02315e] hover:text-[#b9848c] border border-[#02315e] hover:bg-[#02315e] focus:ring-4 focus:outline-none focus:ring-[#AEC670] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-12 gap-8">
            <div class="card rounded p-5 flex flex-col items-center">
              <FaUsersCog className="text-5xl font-bold" />
              <div
                class="font-bold my-3 text-3xl counter"
                data-target="12000"
              ></div>
              <span className="text-xl">Experts</span>
            </div>
            <div class="card rounded p-5 flex flex-col items-center">
              <FaThumbsUp className="text-5xl font-bold" />
              <div
                class="font-bold my-3 text-3xl counter"
                data-target="5000"
              ></div>
              <span className="text-xl">Happy Clients</span>
            </div>
            <div class="card rounded p-5 flex flex-col items-center">
              <FaUsers className="text-5xl font-bold" />
              <div
                class="font-bold my-3 text-3xl counter"
                data-target="7500"
              ></div>
              <span className="text-xl">Partners</span>
            </div>
            <div class="card rounded p-5 flex flex-col items-center">
              <FaTrophy className="text-5xl font-bold" />
              <div class="font-bold my-3 text-3xl counter" data-target="5000">
                0
              </div>
              <span className="text-xl">IT consultant</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
