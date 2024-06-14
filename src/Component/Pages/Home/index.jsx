import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Common/Navbar/index";

import { MdManageAccounts } from "react-icons/md";

const Home = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardData = [
    {
      icon: <MdManageAccounts />,
      title: "Jhon Deo",
      description:
        "Dexplicabo laboriosam exercitationem qui sequi! Dignissimos animi corporis eveniet quod.",
    },
    {
      icon: <MdManageAccounts />,
      title: "Jhon Deo",
      description:
        "Dexplicabo laboriosam exercitationem qui sequi! Dignissimos animi corporis eveniet quod.",
    },
    {
      icon: <MdManageAccounts />,
      title: "Jhon Deo",
      description:
        "Dexplicabo laboriosam exercitationem qui sequi! Dignissimos animi corporis eveniet quod.",
    },
    {
      icon: <MdManageAccounts />,
      title: "Jhon Deo",
      description:
        "Dexplicabo laboriosam exercitationem qui sequi! Dignissimos animi corporis eveniet quod.",
    },
    {
      icon: <MdManageAccounts />,
      title: "Jhon Deo",
      description:
        "Dexplicabo laboriosam exercitationem qui sequi! Dignissimos animi corporis eveniet quod.",
    },
    {
      icon: <MdManageAccounts />,
      title: "Jhon Deo",
      description:
        "Dexplicabo laboriosam exercitationem qui sequi! Dignissimos animi corporis eveniet quod.",
    },
  ];

  return (
    <>
      <div class="gradient-overly-right bg-animate h-screen">
        <Navbar />
        <div class="container mx-auto">
          <section class="gap-6 grid-cols-1 flex justify-center items-center my-16">
            <div class="text-center">
              <p class="mb-2 text-1xl font-extrabold text-white lg:text-xl">
                Welcome To Our Website
              </p>
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                Skill Intelligence World
              </h1>
              <p class="mb-5 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
              <div class="flex flex-row justify-center space-y-0">
                <a
                  href="#/"
                  class="inline-flex justify-center items-center py-3 px-5 mx-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#/"
                  class="py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="w-5/6 m-auto flex flex-col absolute left-[9%] -bottom-[140px]">
          <div className="">
            <Slider {...settings}>
              {cardData.map((link, index) => (
                <div
                  className="rounded-xl bg-white text-color-sherpa-blue"
                  key={index}
                >
                  <div className="h-14 w-14 m-auto pt-7 text-6xl rounded-t-xl flex justify-center items-center">
                    {link.icon}
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{link.title}</p>
                    <p className="text-center">{link.description}</p>
                    <button className="bg-[#033540] text-white text-lg px-6 py-1 rounded-xl">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
