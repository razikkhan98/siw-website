import React from "react";

//  images
import about from "../../assets/img/about.jpg";
const Count = () => {
  function numCounter(tagId, maxCount, speed) {
    var initialNumber = 0;
    function counter() {
      document.getElementById(tagId).innerHTML = initialNumber;
      ++initialNumber;
    }
    var counterDelay = setInterval(counter, speed);
    function totalTime() {
      clearInterval(counterDelay);
    }
    var totalPeriod = speed * maxCount;
    setTimeout(totalTime, totalPeriod);
  }

  numCounter("Projects", 501, 10);
  numCounter("Costumers", 121, 20);
  numCounter("Awards", 436, 10);
  numCounter("IT", 336, 10);

  const CounterCard = [
    {
      id: "Projects",
      name: "Projects Completed",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing. Libero sapiente dolores.",
    },
    {
      id: "Costumers",
      name: "Happy Costumers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing. Libero sapiente dolores.",
    },
    {
      id: "Awards",
      name: "Win Awards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing. Libero sapiente dolores.",
    },
    {
      id: "IT",
      name: "IT Consultants",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing. Libero sapiente dolores.",
    },
  ];

  return (
    <>
      <div className="container mx-auto max-w-screen-xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <img src={about} className="w-80 h-96" alt="Loading" />
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8 m-10">
            {CounterCard.map((link, index) => (
              <div className="counter-box text-center sm:text-left">
                <div className="text-5xl font-bold text-[#A7D1D2]" id={link.id}>
                0<sup>+</sup>
                </div>
                <div className="mt-5 mb-3 font-semibold text-xl">
                  {link.name}
                </div>
                <p className="text-gray-400">{link.description}</p>
              </div>
            ))}
            <div className="theme-btn ">
          <a href="#"><span className="theme-button">Read More</span></a>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Count;
