import React, { useState, useEffect } from "react";

const Team = () => {
  const [currentCard, setCurrentCard] = useState("m1");

  const cardData = [
    {
      id: "m1",
      image:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=400&auto=format&fit=crop",
      name: "Jhone Deo",
      title: "Founder",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m2",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      name: "Isra Beljik",
      title: "Chief Technology Officer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m3",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
      name: "Justin Lager",
      title: "Chief Operator Officer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m4",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
      name: "Georgea Potter",
      title: "Chief Financial Officer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m5",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
      name: "Emilly Jacks",
      title: "Member",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m6",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      name: "Sophia Wingston",
      title: "Engineer",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m7",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop",
      name: "Chris Denial",
      title: "Co-Founder",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m8",
      image:
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?q=80&w=400&auto=format&fit=crop",
      name: "Olivia Brook",
      title: "B.Tech",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m9",
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
      name: "Harry Parker",
      title: "Consulting Member",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
    {
      id: "m10",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=400&auto=format&fit=crop",
      name: "Jhony Deap",
      title: "Team Head",
      bio: " Visionary founder and CEO of EcoTech Innovations a trailblazing enterprise dedicated to sustainable technology solutions. With over 15 years of experience in environmental engineering John has been at the forefront of innovation driving the companys mission to revolutionize renewable energy sources.",
    },
  ];

  useEffect(() => {
    setCurrentCard("m1");
  }, []);

  return (
    <>
      <section className="team   bg-[#033540]">
        <div
          className="container mx-auto max-w-screen-xl pt-14 pb-8"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="text-center text-[#a7d1d2] py-10">
          <div className="service-head flex items-center justify-center">
            <div className="flex flex-col items-end mx-3">
              <div className="h-1 w-7 bg-[#87acb5] inline-block mb-2"></div>
              <div className="h-1 w-16 bg-[#87acb5] inline-block "></div>
            </div>
            <div className="inline-block text-4xl text-[#a7d1d2] font-semibold">
              Our Team
            </div>
            <div className="flex flex-col mx-3">
              <div className="h-1 w-7 bg-[#87acb5] inline-block mb-2"></div>
              <div className="h-1 w-16 bg-[#87acb5] inline-block "></div>
            </div>
          </div>
            <h6 className="text-lg mt-4">
              Meet our skilled professionals who bring a wealth of experience to
              your learning journey.
            </h6>
          </div>
          <div className="snap-x flex overflow-x-auto mb-10 ">
            {cardData.map((item) => (
              <div
                key={item.id}
                className={`snap-start flex-shrink-0 w-40 h-32 m-2 p-1 rounded-full cursor-pointer bg-gray-800 overflow-hidden transform ${
                  currentCard === item.id
                    ? "scale-75 border-4 border-blue-500"
                    : "scale-70 grayscale"
                } transition-all duration-200 ease-in-out hover:grayscale-50 hover:scale-80`}
                onClick={() => setCurrentCard(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {cardData.map((link, index) => (
              <div
                key={index}
                className={`w-full md:w-full lg:w-2/3 p-8  background-color-sky-blue rounded-lg shadow-lg transition-all duration-300 ${
                  currentCard === link.id ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                    <img
                      src={link.image}
                      alt="Loading"
                      className="w-52 h-56 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark mb-2">
                      {link.name}
                    </div>
                    <div className="text-xl text-yellow-500 mb-4">
                      {link.title}
                    </div>
                    <div className="text-dark">
                      <p>{link.bio}</p>
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

export default Team;
