import React from "react";
import Slider from "react-slick";

// Images
import Client1 from "../../assets/img/clients/rumenologo.png";
import Client2 from "../../assets/img/clients/logo.png";
// import Client3 from "../../assets/img/team-3.jpg";
// import Client4 from "../../assets/img/team-4.jpg";

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
      title: "RUMENO",
      description:
        "Rumeno Farmotech is a nutrition and feed supplement technologies company",
      name: "JOHNY CLAN",
      sites: "https://rumeno.in/",
    },
    {
      image: Client2,
      title: "SUPER CHICKS",
      description:
        "Delivering fresh Chicken,fresh Mutton,and fresh Fish to your doorstep",
      name: "LEO",
      sites: "https://superchicks.online/",
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
                key={index}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="background-color-sherpa-blue relative ml-14 h-80 w-32"></div>

                  <div className="absolute mr-7 top-16 lg:h-72 lg:w-80">
                    <a
                      href={link.sites}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={link.image} alt="Loading" />
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <img src={link.image} className="w-20" alt="" />
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
