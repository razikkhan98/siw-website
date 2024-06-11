import React from "react";

import { FaUnity } from "react-icons/fa";

const Service = () => {
  const serviceData = [
    {
      icon: "",
      title: "Need a help in Claim?",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
    },
    {
      icon: "",
      title: "Need a help in Claim?",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
    },
    {
      icon: "",
      title: "Need a help in Claim?",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
    },
    {
      icon: "",
      title: "Need a help in Claim?",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
    },
    {
      icon: "",
      title: "Need a help in Claim?",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
    },
    {
      icon: "",
      title: "Need a help in Claim?",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
    },
  ];
  return (
    <>
    <div className="bg-[#A7D1D2]">
      <div className="container mx-auto max-w-screen-xl px-10 pb-10">
        <div className="text-center text-[#033540] py-12 relative">
          <h2 className="text-4xl font-bold">
            Our{" "}
            <span className="font-semibold underline underline-offset-4 relative">
              Services
            </span>
          </h2>
          <p className="text-lg mt-4">
            We are northui Team, Working together to build a clean web
          </p>
        </div>
        <div className="grid grid-rows-2 lg:grid-cols-3 md:grid-cols-2 gap-12">
          {/* Card start */}
          {serviceData.map((link, index) => (
            <div className="service-card shadow-img bg-[#A7D1D2] relative mx-5 p-6 text-center  rounded-lg grid justify-items-center my-10 hover:bg-white transition duration-500 hover:scale-125">
              <div className="h-14 w-14 p-2 rounded-full grid justify-items-center bg-[#81bece] hover:bg-blue-500 transition duration-500 hover:scale-125 mb-7">
                <FaUnity className="h-10 w-10  text-[#00457e]"/>
              </div>
              <a href="#/">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#033540] dark:text-white">
                  {link.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#015366] dark:text-gray-400">
                {link.description}
              </p>
            </div>
          ))}
          {/* Card End */}
        </div>
      </div>
      </div>
    </>
  );
};
export default Service;
