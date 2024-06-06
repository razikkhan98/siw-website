import React from "react";

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// Images
import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";
import Team4 from "../../assets/img/team-4.jpg";
const Team = () => {
  const teamData = [
    {
      id: "#img-1",
      img: Team1,
    },
    {
      id: "#img-2",
      img: Team2,
    },
    {
      id: "#img-3",
      img: Team3,
    },
    {
      id: "#img-4",
      img: Team4,
    },
  ];
  const teamCardData =[
    {
      id1: "img-1",
      image: Team1,
      title: "UX DESIGNER",
      name: "John Doe",
      description:"   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id1: "img-2",
      image: Team2,
      title: "WEB DESIGNER",
      name: "John Doe",
      description:"   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id1: "img-3",
      image: Team3,
      title: "FRONT-END DESIGNER",
      name: "John Doe",
      description:"   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id1: "img-4",
      image: Team4,
      title: "BACK-END DESIGNER",
      name: "John Doe",
      description:"   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  
  ]
  return (
    <>
      {/* <!-- ========== OUR TEAM SECTION ========== --> */}
      <section
        id="our-team"
        className="bg-[#033540] py-16 overflow-hidden center fixed relative cover"
      >
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center  text-[#A7D1D2] mb-12">
            <h2 className="text-4xl font-bold">
              Our{" "}
              <span className="font-semibold underline underline-offset-4 relative">
                Team
              </span>
            </h2>
            <p className="text-lg mt-4">
              We are northui Team, Working together to build a clean web
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            {/* <!-- team-slider --> */}
            <div className="team-slider relative">
              {teamCardData.map((link, index) => (
                <div
                  className="team-content shadow-img flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  tabIndex="0"
                  id={link.id1}
                >
                  <div className="flex-none w-full">
                    <img
                      src={link.image}
                      alt="img"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex-grow text-center p-5">
                    <div>
                      <p className="text-lg font-medium">{link.title}</p>
                      <h3 className="text-2xl">{link.name}</h3>
                      <p className="mt-4">
                     {link.description}
                      </p>
                      <div className="mt-4">
                        <ul className="flex justify-center gap-10 list-none">
                          <li>
                            <a href="#" target="_blank" title="Like Me">
                              <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#033540] text-[#A7D1D2] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Follow Me">
                              <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#033540] text-[#A7D1D2] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Hire Me">
                              <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#033540] text-[#A7D1D2] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Rate Me">
                              <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#033540] text-[#A7D1D2] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <!-- //item --> */}
            </div>

            {/* <!-- team thumb --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
              {teamData.map((link, index) => (
                <a href={link.id}>
                  <img
                    src={link.img}
                    alt="member"
                    className="shadow-img w-full h-full object-cover rounded-lg hover:opacity-50"
                  />
                </a>
              ))}
              {/* <!-- //.thumb-item --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //End our-team --> */}
    </>
  );
};
export default Team;
