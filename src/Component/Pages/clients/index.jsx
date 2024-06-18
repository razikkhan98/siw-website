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
  return (
    <>
        <div className="container mx-auto py-10">
          <div className="text-center mb-16">
            <h1 className="font-semibold text-4xl text-[#033540]"> Our Clients</h1>
          </div>
          <Slider {...settings}>
            <div className="bg-[#A7D1D2] p-8">
              <div className="flex">
                <div className="bg-[#033540] mr-20 flex items-center">
                  <img src={Client1} alt="Loading" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <FaQuoteRight className="text-4xl text-[#033540]" />
                  <h1 className="text-4xl mb-3">Our Clients Say</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, iste omnis fuga quod distinctio et itaque
                    aspernatur. Ut atque recusandae nemo et amet expedita
                    perspiciatis?
                  </p>
                  <h1 className="font-bold text-2xl mt-3">JOHNY CLAN</h1>
                  <h3>HAPPY CLIENT</h3>
                </div>
              </div>
            </div>

            <div className="bg-[#A7D1D2] p-8">
              <div className="flex">
                <div className="mr-20 flex items-center">
                  <img src={Client2} alt="Loading" />
                </div>
                <div className="flex flex-col justify-center items-center text-center ">
                  <FaQuoteRight className="text-4xl text-[#033540]" />
                  <h1 className="text-4xl mb-3">Our Clients Say</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, iste omnis fuga quod distinctio et itaque
                    aspernatur. Ut atque recusandae nemo et amet expedita
                    perspiciatis?
                  </p>
                  <h1 className="font-bold text-2xl mt-3">LEO </h1>
                  <h3>HAPPY CLIENT</h3>
                </div>
              </div>
            </div>

            <div className="bg-[#A7D1D2] p-8">
              <div className="flex">
                <div className="mr-20 flex items-center">
                  <img src={Client3} alt="Loading" />
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <FaQuoteRight className="text-4xl text-[#033540]" />
                  <h1 className="text-4xl mb-3">Our Clients Say</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, iste omnis fuga quod distinctio et itaque
                    aspernatur. Ut atque recusandae nemo et amet expedita
                    perspiciatis?
                  </p>
                  <h1 className="font-bold text-2xl mt-3">JOHN JACKSON</h1>
                  <h3>HAPPY CLIENT</h3>
                </div>
              </div>
            </div>

            <div className="bg-[#A7D1D2] p-8">
              <div className="flex">
                <div className="mr-20 flex items-center">
                  <img src={Client4} alt="Loading" />
                </div>
                <div className="text-center flex flex-col justify-center items-center">
                  <FaQuoteRight className="text-4xl text-[#033540]" />
                  <h1 className="text-4xl mb-3">Our Clients Say</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, iste omnis fuga quod distinctio et itaque
                    aspernatur. Ut atque recusandae nemo et amet expedita
                    perspiciatis?
                  </p>
                  <h1 className="font-bold text-2xl mt-3">JOHN JACKSON</h1>
                  <h3>HAPPY CLIENT</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
    </>
  );
};
export default Clients;
