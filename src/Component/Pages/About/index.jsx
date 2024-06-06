import React from "react";

// Images
import abt1 from "../../assets/img/abt-1.jpg";
import abt2 from "../../assets/img/abt-2.jpg";
import abt3 from "../../assets/img/abt-3.jpg";

// Icons
import { FaPlay, FaFileDownload, FaUser, FaImage } from "react-icons/fa";

const About = () => {
  return (
    <>
    <div className="bg-[#A7D1D2]">
      <div class="container mx-auto max-w-screen-xl">
        <div class="flex flex-wrap items-center">
          <div class="w-full lg:w-1/2 order-2 lg:order-1 pt-2 lg:mt-0">
            <div class="flex flex-wrap items-center pt-48 mb-10">
              <div class="w-1/2">
                <div class="flex flex-col">
                  <div class="w-full mt-4 pt-2">
                    <div class="shadow-img bg-white rounded shadow-xl overflow-hidden mr-5 shadow-lg">
                      <img src={abt1} class="w-full" alt="Image" />
                      <div class="bg-dark"></div>
                    </div>
                  </div>
                  <div class="w-full mt-4 pt-2 text-right">
                    <a
                      href="javascript:void(0)"
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
                    <div class="shadow-img bg-white rounded shadow-xl overflow-hidden shadow-lg">
                      <img src={abt2} class="w-full" alt="Image" />
                      <div class="bg-dark"></div>
                    </div>
                  </div>
                  <div class="w-full mt-4 pt-2">
                    <div class="shadow-img bg-white rounded shadow-xl overflow-hidden shadow-lg">
                      <img src={abt3} class="w-full" alt="Image" />
                      {/* <div class="bg-dark"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 order-1 lg:order-2 ps-10 md:mt-36">
            <div class="lg:ml-5">
              <h1 class="text-3xl font-bold mb-3">About Us</h1>
              <h4 class="title mb-4">
                Our mission is to <br />
                make your life easier.
              </h4>
              <p class="text-gray-600 mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                debitis praesentium pariatur temporibus ipsa, cum quidem
                obcaecati sunt?
              </p>

              <div class="flex flex-wrap ">
                <div class="shadow-img w-full lg:w-2/5 mt-4 pt-2 mr-5">
                  <div class="flex items-center rounded shadow-lg p-3 bg-white">
                       <div className="h-4 mb-2 text-2xl text-[#033540]">
                       <FaPlay />

                       </div>
                    <h6 class="ml-3 mb-0">
                      <a href="javascript:void(0)" class="text-dark">
                        Responsive
                      </a>
                    </h6>
                  </div>
                </div>
                <div class="shadow-img w-full lg:w-2/5 mt-4 pt-2">
                  <div class="flex items-center rounded shadow-lg p-3 bg-white">
                    <div className="h-4 mb-2 text-2xl text-[#033540]">
                      <FaFileDownload />
                    </div>
                    <h6 class="ml-3 mb-0">
                      <a href="javascript:void(0)" class="text-dark">
                        Free Download
                      </a>
                    </h6>
                  </div>
                </div>
                <div class="shadow-img w-full lg:w-2/5 mt-4 pt-2 mr-5">
                  <div class="flex items-center rounded shadow-lg p-3 bg-white">
                    <div className="h-4 mb-2 text-2xl text-[#033540]">
                      <FaUser />
                    </div>

                    <h6 class="ml-3 mb-0">
                      <a href="javascript:void(0)" class="text-dark">
                        Support
                      </a>
                    </h6>
                  </div>
                </div>
                <div class="shadow-img w-full lg:w-2/5 mt-4 pt-2">
                  <div class="flex items-center rounded shadow-lg p-3 bg-white">
                    <div className="h-4 mb-2 text-2xl text-[#033540]">
                      <FaImage />
                    </div>

                    <h6 class="ml-3 mb-0">
                      <a href="javascript:void(0)" class="text-dark">
                        Development
                      </a>
                    </h6>
                  </div>
                </div>
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
