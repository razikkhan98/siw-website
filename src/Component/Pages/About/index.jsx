import React from "react";

// Images
import Abt1 from "../../assets/img/abt-1.jpg";
import Abt2 from "../../assets/img/abt-2.jpg";
import Abt3 from "../../assets/img/abt-3.jpg";

// Icons
import { FaPlay, FaFileDownload, FaUser, FaImage } from "react-icons/fa";

const About = () => {
  const AboutCard = [
    {
      icon: <FaPlay />,
      title:'Responsive'
    },
    {
      icon: <FaFileDownload />,
      title:'Free Download'
    },
    {
      icon: <FaUser />,
      title:'Support'
    },
    {
      icon: <FaImage />,
      title:'Development'
    },
  ]
  return (
    <>
      <div className="background-color-sky-blue">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 gap-2 py-48">
            <div class="px-6">
              <div class="flex flex-wrap items-center">
                <div class="w-1/2">
                  <div class="flex flex-col">
                    <div class="w-full mt-4 pt-2">
                      <div class="shadow-img bg-white rounded shadow-xl overflow-hidden mr-5">
                        <img src={Abt1} class="w-full" alt="Loading" />
                        <div class="bg-dark"></div>
                      </div>
                    </div>
                    <div class="w-full mt-4 pt-2 text-right">
                      <a
                        href="#/"
                        class="btn btn-info bg-[#033540] text-white mr-5 px-4 py-2 rounded-lg"
                      >
                        Read More <i class="mdi mdi-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-1/2">
                  <div class="flex flex-col">
                    <div class="w-full">
                      <div class="shadow-img bg-white rounded shadow-xl overflow-hidden">
                        <img src={Abt2} class="w-full" alt="Loading" />
                        <div class="bg-dark"></div>
                      </div>
                    </div>
                    <div class="w-full mt-4 pt-2">
                      <div class="shadow-img bg-white rounded shadow-xl overflow-hidden">
                        <img src={Abt3} class="w-full" alt="Loading" />
                        {/* <div class="bg-dark"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 pt-10">
              <div class="lg:ml-5">
                <h1 class="text-3xl font-bold mb-3">About Us</h1>
                <h4 class="mb-4 font-medium">
                  Our mission is to  make your life easier.
                </h4>
                <p class="text-gray-600 mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                  debitis praesentium pariatur temporibus ipsa, cum quidem
                  obcaecati sunt?
                </p>
                <div class="flex flex-wrap">
                  {AboutCard.map((link,index) => (
                    <div class="shadow-img w-full lg:w-2/5 mt-4 pt-2 lg:mr-5">
                    <div class="flex items-center rounded shadow-lg p-3 bg-white">
                      <div className="h-4 mb-2 text-2xl text-color-sherpa-blue">
                        {/* <FaPlay /> */}
                        {link.icon}
                      </div>
                      <h6 class="ml-3 mb-0">
                        <a href="#/" class="text-dark">
                          {/* Responsive */}
                          {link.title}
                        </a>
                      </h6>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
