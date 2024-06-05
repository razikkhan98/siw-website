import React from "react";

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// Images
import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";
import Team4 from "../../assets/img/team-4.jpg";
const Team = () => {
  return (
    <>
      {/* <!-- ========== OUR TEAM SECTION ========== --> */}
      <section
        id="our-team"
        className="card py-16 overflow-hidden center fixed relative cover"
      >
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
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
                <div
                  className="team-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  tabIndex="0"
                  id="img-1"
                >
                  <div className="flex-none w-full">
                    <img
                      src={Team1}
                      alt="img"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex-grow text-center p-5">
                    <div>
                      <p className="text-lg font-medium">UX DESIGNER</p>
                      <h3 className="text-2xl">John Doe</h3>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="mt-4">
                        <ul className="flex justify-center gap-10 list-none">
                          <li>
                            <a href="#" target="_blank" title="Like Me">
                              <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Follow Me">
                              <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Hire Me">
                              <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Rate Me">
                              <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- //item --> */}

                <div
                  className="team-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  // tabIndex="-1"
                  id="img-2"
                >
                  <div className="flex-none w-full">
                    <img
                      src={Team2}
                      alt="img"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex-grow text-center p-5">
                    <div>
                      <p className="text-lg font-medium">UX DESIGNER</p>
                      <h3 className="text-2xl">John Doe</h3>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="mt-4">
                        <ul className="flex justify-center gap-10 list-none">
                          <li>
                            <a href="#" target="_blank" title="Like Me">
                              <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Follow Me">
                              <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Hire Me">
                              <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Rate Me">
                              <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- //item --> */}

                <div
                  className="team-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  // tabIndex="-1"
                  id="img-3"
                >
                  <div className="flex-none w-full">
                    <img
                      src={Team3}
                      alt="img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-grow text-center p-5">
                    <div>
                      <p className="text-lg font-medium">UX DESIGNER</p>
                      <h3 className="text-2xl ">John Doe</h3>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="mt-4">
                        <ul className="flex justify-center gap-10 list-none">
                          <li>
                            <a href="#" target="_blank" title="Like Me">
                              <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Follow Me">
                              <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Hire Me">
                              <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Rate Me">
                              <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- //item --> */}

                <div
                  className="team-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  // tabIndex="-1"
                  id="img-4"
                >
                  <div className="flex-none w-full">
                    <img
                      src={Team4}
                      alt="img"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex-grow text-center p-5">
                    <div>
                      <p className="text-lg font-medium">UX DESIGNER</p>
                      <h3 className="text-2xl ">John Doe</h3>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="mt-4">
                        <ul className="flex justify-center gap-10 list-none">
                          <li>
                            <a href="#" target="_blank" title="Like Me">
                              <FaTwitter className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Follow Me">
                              <FaFacebook className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Hire Me">
                              <FaInstagram className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank" title="Rate Me">
                              <FaWhatsapp className="h-8 w-8 text-justify p-1 bg-[#02315e] text-[#806491] hover:text-[#b9848c] rounded" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- //item --> */}
              </div>
              {/* <!-- //#team-slider --> */}

            {/* <!-- team thumb --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
              <a href="#img-1" >
                <img
                  src={Team1}
                  alt="member"
                  className="w-full h-full object-cover rounded-lg hover:opacity-50"
                />
              </a>
              {/* <!-- //.thumb-item --> */}

              <a href="#img-2">
                <img
                  src={Team2}
                  alt="member"
                  className="w-full h-full object-cover rounded-lg hover:opacity-50"
                />
               
              </a>
              {/* <!-- //.thumb-item --> */}

              <a href="#img-3">
                <img
                  src={Team3}
                  alt="member"
                  className="w-full h-full object-cover rounded-lg hover:opacity-50"
                />
               
              </a>
              {/* <!-- //.thumb-item --> */}

              <a href="#img-4">
                <img
                  src={Team4}
                  alt="member"
                  className="w-full h-full object-cover rounded-lg hover:opacity-50"
                />
                
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //End our-team --> */}
    </>
  );
};
export default Team;
