import React, { useEffect } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "../../Common/Navbar/index";

// import { MdManageAccounts } from "react-icons/md";
// import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
// import { GrSystem } from "react-icons/gr";
// import { SiCplusplus } from "react-icons/si";
// import { FaHtml5, FaCss3 } from "react-icons/fa";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  // const settings = {
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   // cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const cardData = [
  //   {
  //     icon: <FaHtml5 />,
  //     title: "HTML5",
  //     description:
  //       "Game development is the process of creating a video game, involving a combination of several disciplines such as design, art, programming, audio, and testing.",
  //   },
  //   {
  //     icon: <FaCss3 />,
  //     title: "CSS3",
  //     description:
  //       "PHP is an open-source, server-side programming language that can be used to create websites, applications, customer relationship management systems.",
  //   },
  //   {
  //     icon: <GrSystem />,
  //     title: "Ethical Hacking",
  //     description:
  //       "Ethical hacking is an authorized attempt to gain unauthorized access to a computer system, application, or data using the strategies and actions of malicious attackers",
  //   },
  //   {
  //     icon: <IoLogoPython />,
  //     title: "Python",
  //     description:
  //       "Game development is the process of creating a video game, involving a combination of several disciplines such as design, art, programming, audio, and testing.",
  //   },

  //   {
  //     icon: <IoLogoJavascript />,
  //     title: "Javascript",
  //     description:
  //       "A general-purpose, operating system-agnostic, procedural language that supports structured programming and provides low-level access to the system memory.",
  //   },
  //   {
  //     icon: <SiCplusplus />,
  //     title: "Advanced C++",
  //     description:
  //       "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
  //   },
  // ];

  return (
    <>
      <Nav />

      <section
        class="gradient-overly-right bg-animate h-screen flex flex-col justify-center items-center"
        id="Home"
      >
        {/* <div class="bubbles">
          <div class="bubble flex flex-col justify-center items-center text-6xl">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/css3.png"
              alt="css3"
            />
          </div>
          <div class="bubble">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/plasticine/100/python.png"
              alt="python"
            />
          </div>
          <div class="bubble flex flex-col justify-center items-center text-6xl">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/css3.png"
              alt="css3"
            />
          </div>
          <div class="bubble">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/plasticine/100/python.png"
              alt="python"
            />
          </div>
          <div class="bubble">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/node-js.png"
              alt="node-js"
            />
          </div>
          <div class="bubble  flex flex-col justify-center items-center text-6xl">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/color/48/angularjs.png"
              alt="angularjs"
            />
          </div>
          <div class="bubble  flex flex-col justify-center items-center text-6xl">
            <img
              width="68"
              height="68"
              src="https://img.icons8.com/fluency/48/node-js.png"
              alt="node-js"
            />
          </div>
          <div class="bubble">
            <img src="data:image/png;base64,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" />
          </div>
          <div class="bubble">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/angularjs.png"
              alt="angularjs"
            />
          </div>
          <div class="bubble">
            <img src="data:image/png;base64,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" />
          </div>
        </div> */}
        <div class="container mx-auto">
          <section class="gap-6 grid-cols-1">
            <div
              class="text-center"
              // data-aos="flip-up"
              // data-aos-duration="1500"
            >
              <p class="home-content mb-2 text-1xl font-extrabold text-white lg:text-xl">
                Welcome To Our Website
              </p>
              <h1 class="home-head mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                Skill Intelligence World
              </h1>
              <p class="home-content mb-5 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
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

        {/* <div
          className="w-full m-auto flex flex-col absolute -bottom-[150px]"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Slider {...settings}>
            {cardData.map((link, index) => (
              <div
                className="rounded-xl bg-white text-color-sherpa-blue h-74"
                style={{ height: "100%" }}
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
        </div> */}
      </section>
    </>
  );
};

export default Home;
