import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "../../Common/Navbar/index";

// import { MdManageAccounts } from "react-icons/md";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { GrSystem } from "react-icons/gr";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      icon: <FaHtml5 />,
      title: "HTML5",
      description:
        "Game development is the process of creating a video game, involving a combination of several disciplines such as design, art, programming, audio, and testing.",
    },
    {
      icon: <FaCss3 />,
      title: "CSS3",
      description:
        "PHP is an open-source, server-side programming language that can be used to create websites, applications, customer relationship management systems.",
    },
    {
      icon: <GrSystem />,
      title: "Ethical Hacking",
      description:
        "Ethical hacking is an authorized attempt to gain unauthorized access to a computer system, application, or data using the strategies and actions of malicious attackers",
    },
    {
      icon: <IoLogoPython />,
      title: "Python",
      description:
        "Game development is the process of creating a video game, involving a combination of several disciplines such as design, art, programming, audio, and testing.",
    },

    {
      icon: <IoLogoJavascript />,
      title: "Javascript",
      description:
        "A general-purpose, operating system-agnostic, procedural language that supports structured programming and provides low-level access to the system memory.",
    },
    {
      icon: <SiCplusplus />,
      title: "Advanced C++",
      description:
        "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
    },
  ];

  return (
    <>
      <Nav />

      <div
        class="gradient-overly-right bg-animate h-screen flex flex-col justify-center items-center"
        id="Home"
      >
        <div class="container mx-auto">
          <section class="gap-6 grid-cols-1 ">
            <div
              class="text-center"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              <p class="mb-2 text-1xl font-extrabold text-white lg:text-xl">
                Welcome To Our Website
              </p>
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                Skill Intelligence World
              </h1>
              <p class="mb-5 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
                Our company operates in the education and professional
                development sector, focusing on delivering high-quality training
                programs,
              </p>
              <div class="flex flex-row justify-center space-y-0 mb-10">
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

        <div className="w-full m-auto flex flex-col absolute -bottom-[150px]">
          <Slider {...settings}>
            {cardData.map((link, index) => (
              <div
                className="rounded-xl bg-white text-color-sherpa-blue h-74" style={{height:"100%"}}
                data-aos="zoom-in"
                data-aos-duration="1500"
                key={index}
              >
                <div className="h-14 w-14 m-auto pt-7 text-6xl rounded-t-xl flex justify-center items-center">
                  {link.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-4">
                  <p className="text-xl font-bold">{link.title}</p>
                  <p className="text-center">{link.description}</p>
                  <button className="bg-[#033540] text-white text-lg px-6 py-1 mt-2 rounded-xl">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
