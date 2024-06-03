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
        class="bg-[--sky-blue-color] py-16 overflow-hidden center fixed relative cover"
      >
        <div class="container mx-auto max-w-screen-xl">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold">
              Our{" "}
              <span class="font-semibold underline underline-offset-4 relative">
                Team
              </span>
            </h2>
            <p class="text-lg mt-4">
              We are northui Team, Working together to build a clean web
            </p>
          </div>

          <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
              {/* <!-- team-slider --> */}
              <div class="team-slider space-y-8">
                <div
                  class="about-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl mt-3"
                  tabIndex="-1"
                  id="img-1"
                >
                  <div class="flex-none w-full">
                    <img
                      src={Team1}
                      alt="img"
                      class="w-full h-80 object-cover rounded-t-lg"
                    />
                  </div>
                  <div class="flex-grow text-center p-5">
                    <div>
                      <p class="text-lg font-medium">UX DESIGNER</p>
                      <h3 class="text-2xl">John Doe</h3>
                      <p class="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="mt-4">
                        <ul class="flex justify-center gap-10 list-none">
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
                  class="about-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  tabIndex="-1"
                  id="img-2"
                >
                  <div class="flex-none w-full">
                    <img
                      src={Team2}
                      alt="img"
                      class="w-full h-80 object-cover rounded-t-lg"
                    />
                  </div>
                  <div class="flex-grow text-center p-5">
                    <div>
                      <p class="text-lg font-medium">UX DESIGNER</p>
                      <h3 class="text-2xl">John Doe</h3>
                      <p class="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="mt-4">
                        <ul class="flex justify-center gap-10 list-none">
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
                  class="about-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  tabIndex="-1"
                  id="img-3"
                >
                  <div class="flex-none w-full">
                    <img
                      src={Team3}
                      alt="img"
                      class="w-full h-80 object-cover rounded-t-lg"
                    />
                  </div>
                  <div class="flex-grow text-center p-5">
                    <div>
                      <p class="text-lg font-medium">UX DESIGNER</p>
                      <h3 class="text-2xl ">John Doe</h3>
                      <p class="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="mt-4">
                        <ul class="flex justify-center gap-10 list-none">
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
                  class="about-content flex flex-col items-center space-x-8 bg-white mx-5 rounded-xl"
                  tabIndex="-1"
                  id="img-4"
                >
                  <div class="flex-none w-full">
                    <img
                      src={Team4}
                      alt="img"
                      class="w-full h-80 object-cover rounded-t-lg"
                    />
                  </div>
                  <div class="flex-grow text-center p-5">
                    <div>
                      <p class="text-lg font-medium">UX DESIGNER</p>
                      <h3 class="text-2xl ">John Doe</h3>
                      <p class="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div class="mt-4">
                        <ul class="flex justify-center gap-10 list-none">
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
            <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
              <a href="#img-1">
                <img
                  src={Team1}
                  alt="member"
                  class="w-full h-full object-cover rounded-lg"
                />
                <div class="text-center mt-2">
                  <p class="text-lg font-medium">UX DESIGNER</p>
                  <h4 class="text-xl">John Doe</h4>
                </div>
              </a>
              {/* <!-- //.thumb-item --> */}

              <a href="#img-2">
                <img
                  src={Team2}
                  alt="member"
                  class="w-full h-full object-cover rounded-lg"
                />
                <div class="text-center mt-2">
                  <p class="text-lg font-medium">UX DESIGNER</p>
                  <h4 class="text-xl">John Doe</h4>
                </div>
              </a>
              {/* <!-- //.thumb-item --> */}

              <a href="#img-3">
                <img
                  src={Team3}
                  alt="member"
                  class="w-full h-full object-cover rounded-lg"
                />
                <div class="text-center mt-2">
                  <p class="text-lg font-medium">UX DESIGNER</p>
                  <h4 class="text-xl">John Doe</h4>
                </div>
              </a>
              {/* <!-- //.thumb-item --> */}

              <a href="#img-4">
                <img
                  src={Team4}
                  alt="member"
                  class="w-full h-full object-cover rounded-lg"
                />
                <div class="text-center mt-2">
                  <p class="text-lg font-medium">UX DESIGNER</p>
                  <h4 class="text-xl">John Doe</h4>
                </div>
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
