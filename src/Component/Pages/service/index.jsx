import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import MarketingStrategy from "../../assets/img/Service/service-icon-marketing-strategy.png";

const Service = () => {
  const ServiceData = [
    {
      imgUrl: MarketingStrategy,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: MarketingStrategy,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: MarketingStrategy,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: MarketingStrategy,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: MarketingStrategy,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      imgUrl: MarketingStrategy,
      title: "Marketing Strategy",
      description:
        " It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-center">
            <div className="h-1 w-9 background-color-sherpa-blue inline-block mx-3 tex"></div>
            <div className="inline-block text-lg text-color-sherpa-blue font-semibold uppercase">
              Our Service
            </div>
            <div className="h-1 w-9 background-color-sherpa-blue inline-block mx-3"></div>
          </div>
          <h1 className="my-4 text-center text-4xl font-medium">
            We provide exclusive <br /> services for your business
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
                  <img src={link.imgUrl} alt="Loading" />
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
