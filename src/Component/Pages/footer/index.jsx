import React from "react";
import { NavLink } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "../../assets/img/logo/SIW LOGO.png";

import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

// Images
// import Logo from "../../assets/img/logo/SIW LOGO (1).png";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

const FooterSection = () => {
  return (
    <>
      <section>
        <Footer container className="background-color-sky-blue">
          <div className="w-full py-8">
            <div className="mx-auto max-w-screen-xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="text-center flex-col items-center justify-center">
                  <div className="lg:flex lg:items-start lg:justify-start w-full h-1/1">
                    <a href="/" className="flex items-center justify-center gap-3">
                      <img src={Image} alt="" className="w-1/5" />
                      <p className="items-center text-4xl font-black">
                        SIW
                      </p>
                    </a>
                  </div>
                  <p className="mt-6 max-w-md text-center leading-relaxed text-dark-500">
                    A team of experienced professionals with deep industry
                    knowledge ensures that SIW’s offerings are relevant and
                    up-to-date.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 pb-4">
                  <div className="text-center sm:text-left">
                    <FooterTitle
                      title="pages"
                      className="text-bold text-2xl"
                    />
                    <FooterLinkGroup col className="text-dark-500">
                      <FooterLink href="/">Home</FooterLink>
                      <FooterLink href="#about">About</FooterLink>
                      <FooterLink href="#service">Service</FooterLink>
                      <FooterLink href="/tools">Tools</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  {/* <div className="text-center sm:text-left">
                    <FooterTitle
                      title="Our Services"
                      className="text-bold text-2xl"
                    />
                    <FooterLinkGroup col className="text-dark-500">
                      <FooterLink href="#">Web Development</FooterLink>
                      <FooterLink href="#">App Development</FooterLink>
                      <FooterLink href="#">Marketing</FooterLink>
                      <FooterLink href="#">Google Ads</FooterLink>
                    </FooterLinkGroup>
                  </div> */}
                  <div className="text-center sm:text-left">
                    <FooterTitle title="Legal" className="text-bold text-2xl" />
                    <FooterLinkGroup col className="text-dark-500">
                      <FooterLink href="#">Privacy Policy</FooterLink>
                      <FooterLink href="#">Terms & Conditions Apply</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  <div className="text-center sm:text-left">
                    <FooterTitle
                      title="CAREER"
                      className="text-bold text-2xl"
                    />
                    <FooterLinkGroup col className="text-dark-500">
                      <FooterLink href="#">Web Development</FooterLink>
                      <FooterLink href="#">App Development</FooterLink>
                      <FooterLink href="#">Marketing</FooterLink>
                      <FooterLink href="#">Google Ads</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  <div className="text-center sm:text-left">
                    <FooterTitle
                      title="location"
                      className="text-bold text-2xl"
                    />
                    <FooterLinkGroup col className="text-dark-500">
                      <FooterLink href="https://maps.app.goo.gl/kgEpwAB3TN8hK9MCA" target="_blank">Sapna Sangeeta Road, Manish Bag Colony, Indore</FooterLink>
                    </FooterLinkGroup>
                  </div>
                </div>
              </div>
              <FooterDivider />
              <div className="w-full flex items-center justify-between">
                <FooterCopyright
                  href="#"
                  by="Skill Intelligence World"
                  year={2022}
                />

                <div className="mt-4 items-center justify-evenly flex space-x-6 sm:mt-0 sm:justify-center">
                  <NavLink
                    href=""
                    className="icon-style text-4xl"
                    to="https://www.facebook.com/profile.php?id=61550891938064"
                    target="_blank"
                  >
                    <AiOutlineFacebook />
                  </NavLink>
                  <NavLink
                    className="icon-style text-4xl"
                    to="https://www.instagram.com/skill_intelligence_world_9213/"
                    target="_blank"
                  >
                    <RiInstagramLine />
                  </NavLink>

                  <NavLink
                    className="icon-style text-4xl"
                    to="https://www.linkedin.com/company/skill-intelligence-world/"
                    target="_blank"
                  >
                    <CiLinkedin />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Footer>
      </section>
    </>
  );
};
export default FooterSection;
