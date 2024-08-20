import React from "react";
import Slider from "react-slick";

// Images
import Client1 from "../../assets/img/team-5.jpg";
import Client2 from "../../assets/img/team-2.jpg";
import Client3 from "../../assets/img/team-3.jpg";
import Client4 from "../../assets/img/team-4.jpg";
// Icons
import { FaQuoteRight } from "react-icons/fa";

const Clients = () => {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const clientData = [
    {
      image: Client1,
      title: "Our Clients Say",
      description:
        "Innovative and flexible training solutions have equipped our team with the latest skills. Outstanding dedication and expertise.",
      name: "JOHNY CLAN",
    },
    {
      image: Client2,
      title: "Our Clients Say",
      description:
        "Advanced tools to evaluate and enhance skill levels, providing personalized learning pathways for optimal development.",
      name: "LEO",
    },
    {
      image: Client3,
      title: "Our Clients Say",
      description:
        "Customized solutions to help organizations develop and implement effective training strategies.",
      name: "JOHN JACKSON",
    },
    {
      image: Client4,
      title: "Our Clients Say",
      description:
        "Flexible training solutions with the latest skills. Outstanding dedication and expertise.",
      name: "JOHNY CLAN",
    },
  ];
  return (
    <>
      <section className="client bg-[#d9f6f7]">
        <div className="container mx-auto py-16">
          <div className="flex items-center justify-center text-center my-10">
            <div className="flex flex-col items-end mx-3">
              <div className="h-1 w-7 background-color-sherpa-blue inline-block mb-2"></div>
              <div className="h-1 w-16 background-color-sherpa-blue inline-block"></div>
            </div>
            <h1 className="font-semibold text-4xl text-color-sherpa-blue mx-2">
              Our Clients
            </h1>
            <div className="flex flex-col mx-3">
              <div className="h-1 w-7 background-color-sherpa-blue inline-block mb-2"></div>
              <div className="h-1 w-16 background-color-sherpa-blue inline-block"></div>
            </div>
          </div>

          <Slider {...settings}>
            {clientData.map((link, index) => (
              <div
                className="bg-[#d9f6f7] mt-4 p-8"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-palacement="top-bottom"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="background-color-sherpa-blue relative ml-16 h-80 w-32"></div>

                  <div className="absolute top-16 h-72 w-96">
                    <img src={link.image} alt="Loading" />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <FaQuoteRight className="text-4xl text-color-sherpa-blue" />
                    <h1 className="text-4xl my-3">{link.title}</h1>
                    <p>{link.description}</p>
                    <h1 className="font-bold text-2xl mt-3">{link.name}</h1>
                    <h3>HAPPY CLIENT</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Clients;
