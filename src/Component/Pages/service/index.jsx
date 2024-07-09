import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
// import MarketingStrategy from "../../assets/img/Service/service-icon-marketing-strategy.png";
import Service1 from "../../assets/img/Service/service-1.svg";
import Service2 from "../../assets/img/Service/service-2.svg";
import Service3 from "../../assets/img/Service/service-3.svg";
import Service4 from "../../assets/img/Service/service-4.svg";
import Service5 from "../../assets/img/Service/service-5.svg";
import Service6 from "../../assets/img/Service/service-6.svg";

const Service = () => {
  const ServiceData = [
    {
      imgUrl: Service1,
      title: "Web Development",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: Service2,
      title: "Search Engine Optimization",
      description:
        " SEO means the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for:",
    },
    {
      imgUrl: Service3,
      title: "User Interface",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: Service4,
      title: "Machine Learning",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: Service5,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: Service6,
      title: "Automation Testing",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  ];
  return (
    <>
      <div className="bg-[#d9f6f7]">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-center">
          <div className="flex flex-col items-end mx-3">
            <div className="h-1 w-7 bg-[#033540] inline-block mb-2"></div>
            <div className="h-1 w-16 bg-[#033540] inline-block "></div>
            </div>
            <div className="inline-block text-4xl text-color-sherpa-blue font-semibold">
              Our Service
            </div>
            <div className="flex flex-col mx-3">
            <div className="h-1 w-7 bg-[#033540] inline-block mb-2"></div>
            <div className="h-1 w-16 bg-[#033540] inline-block "></div>
            </div>
          </div>
          <h1 className="my-4 text-center text-xl font-medium">
            We provide exclusive services for your business
          </h1>

          <div
            className="grid lg:grid-cols-3
           gap-4 pt-10"
          >
            {ServiceData.map((link, index) => (
              <div
                className="service-btn px-8 py-3"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="btn--jump">
                  <img className="h-24 w-32" src={link.imgUrl} alt="Loading" />
                </div>
                <div className="text-color-sherpa-blue font-bold text-2xl mt-3">
                  {link.title}
                </div>

                <p className="py-6 pr-5 text-gray-600">{link.description}</p>
                <div className="theme-btn">
                  <a href="#/">
                    <span className="theme-button">
                      Read More{" "}
                      <FaArrowRightLong className="inline-block mx-2" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
            {/* <div className="px-6">
              <img src={MarketingStrategy} alt="Loading" />

              <div className="text-color-sherpa-blue font-bold text-2xl mt-3">
                Marketing Strategy
              </div>

              <p className="py-6 text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <div className="my-4">
                <a
                  href="#/"
                  className="py-3.5 px-7 border-2 border-[#A7D1D2] rounded-lg"
                >
                  <span>
                    Read More <FaArrowRightLong className="inline-block mx-2" />
                  </span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
