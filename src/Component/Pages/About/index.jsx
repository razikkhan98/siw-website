import React from "react";

// Images
import Abt1 from "../../assets/img/About/abt-1.jpg";
import Abt2 from "../../assets/img/About/abt-2.jpg";
import Abt3 from "../../assets/img/About/abt-3.jpg";

// Icons
import { FaPlay, FaFileDownload, FaUser, FaImage } from "react-icons/fa";

const About = () => {
  const AboutCard = [
    {
      icon: <FaPlay />,
      title: "Responsive",
    },
    {
      icon: <FaFileDownload />,
      title: "Free Download",
    },
    {
      icon: <FaUser />,
      title: "Support",
    },
    {
      icon: <FaImage />,
      title: "Development",
    },
  ];
  return (
    <>
      <div className="background-color-sky-blue">
        <div className="container mx-auto">
          <div className="pt-48 pb-20">
            <div className="grid lg:grid-cols-2 gap-2 py-10">
              <div className="px-6">
                <div className="flex flex-wrap items-center">
                  <div className="w-1/2">
                    <div className="flex flex-col">
                      <div className="w-full mt-4 pt-2">
                        <div
                          className="shadow-img bg-white rounded shadow-xl overflow-hidden mr-5"
                          data-aos="zoom-in"
                          data-aos-duration="3000"
                          data-aos-delay="300"
                        >
                          <img src={Abt1} className="w-full" alt="Loading" />
                          <div className="bg-dark"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2">
                    <div className="flex flex-col">
                      <div className="w-full">
                        <div
                          className="shadow-img bg-white rounded shadow-xl overflow-hidden"
                          data-aos="zoom-in"
                          data-aos-duration="3000"
                          data-aos-delay="400"
                        >
                          <img src={Abt2} className="w-full" alt="Loading" />
                          <div className="bg-dark"></div>
                        </div>
                      </div>
                      <div className="w-full mt-4 pt-2">
                        <div
                          className="shadow-img bg-white rounded shadow-xl overflow-hidden"
                          data-aos="zoom-in"
                          data-aos-duration="3000"
                          data-aos-delay="500"
                        >
                          <img src={Abt3} className="w-full" alt="Loading" />
                          {/* <div className="bg-dark"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="px-4 pt-10"
                data-aos="zoom-in-left"
                data-aos-duration="3000"
              >
                <div className="lg:ml-5">
                  <div className="flex text-3xl font-bold mb-3">
                    <h1>About Us</h1>
                    <div className="mr-4 font-extrabold">__ </div>
                    <div className="font-extrabold">_____</div>
                  </div>
                  <h4 className="mb-4 font-medium">
                    Our mission is to make your life easier.
                  </h4>
                  <p className="text-gray-600 mb-0 text-justify">
                    SIW operates in the education and professional development
                    sector, focusing on delivering high-quality training
                    programs, resources, and tools that cater to a diverse range
                    of industries. Skill Intelligence World (SIW) is a leading
                    company dedicated to revolutionizing the way individuals and
                    organizations approach skill development and intelligence
                    enhancement. With a mission to bridge the gap between
                    current skill levels and industry demands, SIW offers
                    innovative solutions designed to empower professionals and
                    businesses to thrive in an ever-evolving marketplace.
                  </p>
                  <div className="flex flex-wrap">
                    {AboutCard.map((link, index) => (
                      <div className="shadow-img w-full lg:w-2/5 mt-4 pt-2 lg:mr-5">
                        <div className="flex items-center rounded shadow-lg p-3 bg-white">
                          <div className="h-4 mb-2 text-2xl text-color-sherpa-blue">
                            {/* <FaPlay /> */}
                            {link.icon}
                          </div>
                          <h6 className="ml-3 mb-0">
                            <a href="#/" className="text-dark">
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

            {/* cards */}
            {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 px-6">
              <div class="shadow-img rounded p-5 flex flex-col items-center">
                <FaUsersCog className="text-5xl font-bold" />
                <div
                  class="font-bold my-3 text-3xl counter"
                  data-target="12000"
                ></div>
                <span className="text-xl">Experts</span>
              </div>
              <div class="shadow-img rounded p-5 flex flex-col items-center">
                <FaThumbsUp className="text-5xl font-bold" />
                <div
                  class="font-bold my-3 text-3xl counter"
                  data-target="5000"
                ></div>
                <span className="text-xl">Happy Clients</span>
              </div>
              <div class="shadow-img rounded p-5 flex flex-col items-center">
                <FaUsers className="text-5xl font-bold" />
                <div
                  class="font-bold my-3 text-3xl counter"
                  data-target="7500"
                ></div>
                <span className="text-xl">Partners</span>
              </div>
              <div class="shadow-img rounded p-5 flex flex-col items-center">
                <FaTrophy className="text-5xl font-bold" />
                <div
                  class="font-bold my-3 text-3xl counter"
                  data-target="5000"
                ></div>
                <span className="text-xl">IT consultant</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
