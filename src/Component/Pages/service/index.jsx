import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Service2 from "../../assets/img/logo/SIW LOGO (1).png";

import Nav from "../../Common/Navbar/index";
// Import your CSS file

const Service = () => {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newShowCards = Array.from(
        document.querySelectorAll(".service-card")
      ).map((card) => {
        const rect = card.getBoundingClientRect();
        return rect.top < window.innerHeight;
      });
      setShowCards(newShowCards);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardData = [
    {
      image: Service2,
      title: "Rumeno",
      describe:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      content: "INTELLIGENCE FUSION TECHNOLOGY",
    },
    {
      image: Service2,
      title: "Rumeno",
      describe:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      content: "SKILL INTELLIGENCE WORLD",
    },
    {
      image: Service2,
      title: "Rumeno",
      describe:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      content: "SKILL INTELLIGENCE EDUCATOR",
    },
  ];

  return (
    <>
      <Nav />
      <section className="service" id="service">
        <div className="container mx-auto max-w-screen-xl pt-24 pb-5">
          <div className="service-head flex items-center justify-center">
            <div className="flex flex-col items-end mx-3">
              <div className="h-1 w-7 background-color-sherpa-blue inline-block mb-2"></div>
              <div className="h-1 w-16 background-color-sherpa-blue inline-block"></div>
            </div>
            <div className="inline-block text-4xl text-color-sherpa-blue font-semibold">
              Our Service
            </div>
            <div className="flex flex-col mx-3">
              <div className="h-1 w-7 background-color-sherpa-blue inline-block mb-2"></div>
              <div className="h-1 w-16 background-color-sherpa-blue inline-block"></div>
            </div>
          </div>
          <h1 className="text-center text-xl font-medium">
            We provide exclusive services for your business
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 py-24 gap-6">
            {cardData.map((item, index) => (
              <div
                className={`service-card w-4/5 h-72 flex flex-col items-center justify-center m-auto transition duration-700 ease-in-out ${
                  showCards[index] ? "show" : ""
                }`}
                key={index}
              >
                <div className="service-img h-48 absolute transition duration-700 ease-in-out z-5 flex flex-col items-center justify-center">
                  <img
                    className="w-2/3"
                    src={item.image}
                    alt="Loading"
                  />
                  <p className="text-white text-lg text-center pt-2 px-5">
                    {item.content}
                  </p>
                </div>
                <div className="service-textBox px-5 text-center flex flex-col items-center justify-center opacity-0 gap-3.5 transition duration-700 ease-in-out z-10">
                  <h1 className="service-textHead text-teal-50 font-bold text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-gray-200 text-xl">{item.describe}</p>
                  <div className="theme-btn">
                    <a href="#clients">
                      <span className="theme-button">
                        Read More <FaArrowRightLong className="inline-block" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
