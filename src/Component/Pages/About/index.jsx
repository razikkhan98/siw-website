import React from "react";

// Images
import Abt1 from "../../assets/img/About/abt-1.jpg";
import Abt2 from "../../assets/img/About/abt-2.jpg";
import Abt3 from "../../assets/img/About/abt-3.jpg";

// Icons
import { FaUser, FaImage } from "react-icons/fa";
import Nav from "../../Common/Navbar";

const About = () => {
  const AboutCard = [
    // {
    //   icon: <FaPlay />,
    //   title: "Responsive",
    // },
    // {
    //   icon: <FaFileDownload />,
    //   title: "Free Download",
    // },
    {
      icon: <FaUser />,
      title: "Service",
      link: "#service",
    },
    {
      icon: <FaImage />,
      title: "Product",
    },
  ];
  return (
    <>
      <Nav />
      <section className="background-color-sky-blue" id="about">
        <div className="container mx-auto">
          <div className="pt-12 pb-20">
            <div className="grid lg:grid-cols-2 gap-2 py-10">
              <div className="px-6">
                <div className="flex flex-wrap items-center">
                  <div className="w-1/2">
                    <div className="flex flex-col">
                      <div className="w-full mt-4 pt-2">
                        <div
                          className="shadow-img bg-white rounded shadow-xl overflow-hidden mr-5"
                          data-aos="fade-right"
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
                          data-aos="fade-down"
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
                          data-aos="fade-up"
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
                data-aos="zoom-in-right"
                data-aos-duration="3000"
              >
                <div className="lg:ml-5">
                  <div className="flex items-center text-3xl text-color-sherpa-blue font-bold mb-3">
                    <h1>About Us</h1>
                    <div className="flex flex-col  mx-3">
                      <div className="h-1 w-7 background-color-sherpa-blue inline-block mb-2">
                        {" "}
                      </div>
                      <div className="h-1 w-16 background-color-sherpa-blue inline-block">
                        {" "}
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-4 font-medium">
                    Our mission is to make your life easier.
                  </h4>
                  <p className="text-gray-600 mb-0 text-justify">
                    Welcome to SIW , where we believe in "Transforming Ideas
                    into IT Realities". We are a dynamic group dedicated to
                    empowering individuals and businesses through our complete
                    range of services in IT, trading, and education. VISION : At
                    Skill Intelligence World, we believe in pushing the
                    boundaries of technology to achieve greater heights and
                    capabilities to create opportunities and drive success. Our
                    vision is to Transform Tech Challenges into Victories.
                    MISSION : Our mission is to help people and businesses
                    succeed by providing innovative IT services, smart trading
                    solutions, and valuable educational programs. We aim to make
                    technology accessible, trading understandable, and learning
                    enjoyable, so everyone can reach their goals and grow. What
                    We Offer : IT Services : Our IT division INTELLIGENCE FUSION
                    TECHNOLOGY, helps in providing best technology solutions
                    tailored to your business needs. From software development
                    and cybersecurity to cloud services and IT consultancy, we
                    ensure you stay ahead in a this Tech-leading world. Trading
                    Services : At INTELLIGENCE TRADE, we offer expert trading
                    services that empower individuals and businesses to navigate
                    the financial markets confidently. Our team of seasoned
                    traders and analysts provide the insights and strategies
                    needed to optimize investments and maximize returns.
                    Educational Services : Knowledge is power, and our
                    educational services are designed to enlighten and to craft
                    a person in such a way that they shall be able to master the
                    desired skills. INTELLIGENCE EDUACTORS offer a variety of
                    training programs and online/offline courses aimed at
                    enhancing skills in IT , ensuring our clients are
                    well-equipped for the future.
                  </p>
                  <div className="flex flex-wrap">
                    {AboutCard.map((items, index) => (
                      <div className="shadow-img w-full lg:w-2/5 mt-4 pt-2 lg:mr-5">
                        <div className="flex items-center rounded shadow-lg p-3 bg-white">
                          <div className="h-4 mb-2 text-2xl text-color-sherpa-blue">
                            {/* <FaPlay /> */}
                            {items.icon}
                          </div>
                          <h6 className="ml-3 mb-0">
                            <a href={items.link} className="text-dark">
                              {/* Responsive */}
                              {items.title}
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
      </section>
    </>
  );
};
export default About;
