import React from "react";

//  images
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
        "Lorem ipsum dolor sit amet consectetur umm adipisicing. Libero sapiente dolores.",
    },
    {
      id: "Costumers",
      name: "Happy Costumers",
      description:
        "Great service, always get helpful and quick responses.",
      margin: "md:mt-10",
    },
    {
      id: "Awards",
      name: "Win Awards",
      description:
        "Lorem ipsum dolor sit amet consectetur umm adipisicing. Libero sapiente dolores.",
      margin: "md:mb-10",
    },
    {
      id: "IT",
      name: "IT Consultants",
      description:
        "Lorem ipsum dolor sit amet consectetur umm adipisicing. Libero sapiente dolores.",
    },
  ];

  return (
    <>
      <div className="demo-bg">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-8">
            <div
              class="self-center w-full h-full bg-black px-10 py-8 rounded-2xl uppercase"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="text-white text-lg font-bold  pb-8">
                <p className="text-red-500 ">my skill</p>
              </div>
              <div className="w-full grid grid-cols-2 pb-2 text-white">
                <div>
                  <p>react js</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400">83%</p>
                </div>
              </div>
              <div class="progress1 bg-white progress-moved1 rounded-full">
                <div
                  class="progress-bar1 h-1.5 w-5/6 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to left, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)",
                    animation: "progressAnimation 4s",
                  }}
                ></div>
              </div>
              <div className="w-full grid grid-cols-2 mt-4 pb-2 text-white text-uppercase">
                <div>
                  <p>html</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400">60%</p>
                </div>
              </div>
              <div class="progress1 bg-white progress-moved2 rounded-full">
                <div
                  class="progress-bar2 h-1.5 w-3/5 rounded-full "
                  style={{
                    background:
                      "linear-gradient(to left, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)",
                    animation: "barAnimation 4s",
                  }}
                ></div>
              </div>
              <div className="w-full grid grid-cols-2 mt-4 pb-2 text-white text-uppercase">
                <div>
                  <p>css</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400">90%</p>
                </div>
              </div>
              <div class="progress1 bg-white progress-moved3 rounded-full">
                <div
                  class="progress-bar3 h-1.5 w-3/4 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to left, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)",
                    animation: "lastAnimation 4s",
                  }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8">
              {CounterCard.map((link, index) => (
                <div
                  className={`counter-box ${link.margin} text-justify rounded-3xl p-4`}
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <h1 className="text-5xl font-bold text-[#A7D1D2]">
                    <span id={link.id}>0</span>
                    <sup>+</sup>
                  </h1>
                  <div className="mt-5 mb-3 font-bold text-xl">{link.name}</div>
                  <p className="text-gray-400">{link.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Count;
