import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
// import MarketingStrategy from "../../assets/img/Service/service-icon-marketing-strategy.png";
import Service1 from "../../assets/img/clients/rumenologo.png";
import Service2 from "../../assets/img/clients/intelligencetrade.png";
import Service3 from "../../assets/img/clients/intelligence-educator.png";
// import Service4 from "../../assets/img/Service/service-4.svg";
// import Service5 from "../../assets/img/Service/service-5.svg";
// import Service6 from "../../assets/img/Service/service-6.svg";

const Service = () => {
  const ServiceData = [
    {
      imgUrl: Service1,
      title: "Rumeno",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: Service2,
      title: "Trade",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: Service3,
      title: "Educator",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },

    // {
    //   imgUrl: Service4,
    //   title: "Machine Learning",
    //   description:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page",
    // },
    // {
    //   imgUrl: Service5,
    //   title: "Marketing Strategy",
    //   description:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page",
    // },
    // {
    //   imgUrl: Service6,
    //   title: "Automation Testing",
    //   description:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page",
    // },
  ];
  return (
    <>
      <section className="service bg-[#d9f6f7]" id="Service">
        <div
          className="container mx-auto max-w-screen-xl pt-24 pb-5"
          // data-aos="zoom-in"
          // data-aos-duration="3000"
          // data-aos-delay="500"
        >
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
          <h1 className=" text-center text-xl font-medium">
            We provide exclusive services for your business
          </h1>

          <div
            className="grid lg:grid-cols-3
            py-10"
          >
            {ServiceData.map((link, index) => (
              <div className="service-main lg:h-96">
                <div className="service-profile relative font-sans w-56 h-56 p-7 bg-white shadow-[0_0_22px_rgba(51,51,51,0.4)] mx-6">
                  <div className="service-img w-full h-full relative">
                    <img
                      src={link.imgUrl}
                      alt="Loading"
                      className="w-full h-full shadow-[0_0_22px_rgba(51,51,51,0.4)]"
                      // style={{ width: "200px", height: "120px" }}
                    />
                  </div>
                  <div className="service-caption text-center">
                    <h3 className="font-bold font-sans text-color-sherpa-blue text-xl">
                      {link.title}
                    </h3>
                    <p className="font-sans text-base text-[#0d1117] my-1">
                      {link.description}
                    </p>
                    <div className="theme-btn">
                      <a href="#clients">
                        <span className="theme-button">
                          Read More{" "}
                          <FaArrowRightLong className="inline-block mx-2" />
                        </span>
                      </a>
                    </div>
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
