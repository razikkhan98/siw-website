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
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const clientData = [
    {
      image: Client1,
      title: "Our Clients Say",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iste omnis fuga quod distinctio et itaque aspernatur. Ut atque recusandae nemo et amet expedita perspiciatis?",
      name: "JOHNY CLAN",
    },
    {
      image: Client2,
      title: "Our Clients Say",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iste omnis fuga quod distinctio et itaque aspernatur. Ut atque recusandae nemo et amet expedita perspiciatis?",
      name: "LEO",
    },
    {
      image: Client3,
      title: "Our Clients Say",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iste omnis fuga quod distinctio et itaque aspernatur. Ut atque recusandae nemo et amet expedita perspiciatis?",
      name: "JOHN JACKSON",
    },
    {
      image: Client4,
      title: "Our Clients Say",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iste omnis fuga quod distinctio et itaque aspernatur. Ut atque recusandae nemo et amet expedita perspiciatis?",
      name: "JOHNY CLAN",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="flex items-center justify-center text-center mb-10">
          <div className="font-extrabold text-3xl">___</div>
          <h1 className="font-semibold text-4xl text-[#033540] mx-2">
            Our Clients
          </h1>
          <div className="font-extrabold text-3xl">___</div>
        </div>

        <Slider {...settings}>
          {clientData.map((link, index) => (
            <div className="bg-[#A7D1D2] p-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#033540] relative ml-10 h-80 w-32">
                </div>

                  <div className="absolute top-16 h-72 w-96">
                    <img src={link.image} alt="Loading" />
                  </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <FaQuoteRight className="text-4xl text-[#033540]" />
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
    </>
  );
};
export default Clients;
