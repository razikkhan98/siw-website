import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterSection = () => {
  return (
    <>
      <section>
        <Footer container className="background-color-sky-blue">
          <div className="w-full py-8">
            <div className="mx-auto max-w-screen-xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                  <FooterBrand
                    href="https://flowbite.com"
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Flowbite Logo"
                    name="SIW"
                  />
                  <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                    A team of experienced professionals with deep industry
                    knowledge ensures that SIW’s offerings are relevant and
                    up-to-date.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 pb-4">
                  <div className="text-center sm:text-left">
                    <FooterTitle title="about us" className="text-bold text-2xl"/>
                    <FooterLinkGroup col>
                      <FooterLink href="#">Company History</FooterLink>
                      <FooterLink href="#">Meet the Team</FooterLink>
                      <FooterLink href="#">Employee Handbook</FooterLink>
                      <FooterLink href="#">Career</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  <div className="text-center sm:text-left">
                    <FooterTitle title="Our Services"  className="text-bold text-2xl"/>
                    <FooterLinkGroup col>
                      <FooterLink href="#">Web Development</FooterLink>
                      <FooterLink href="#">App Development</FooterLink>
                      <FooterLink href="#">Marketing</FooterLink>
                      <FooterLink href="#">Google Ads</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  <div className="text-center sm:text-left">
                    <FooterTitle title="Legal"  className="text-bold text-2xl"/>
                    <FooterLinkGroup col>
                      <FooterLink href="#">Privacy Policy</FooterLink>
                      <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  {/* <div className="text-center sm:text-left">
                  <FooterTitle title="Contact us" />
                  <FooterLinkGroup col>
                    <FooterLink href="#">Web Development</FooterLink>
                    <FooterLink href="#">App Development</FooterLink>
                    <FooterLink href="#">Marketing</FooterLink>
                    <FooterLink href="#">Google Ads</FooterLink>
                  </FooterLinkGroup>
                </div> */}
                </div>
              </div>
              <FooterDivider />
              <div className="w-full pt-4 flex items-center justify-between">
                <FooterCopyright
                  href="#"
                  by="Skill Intelligence World"
                  year={2022}
                />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <FooterIcon href="#" icon={BsFacebook} />
                  <FooterIcon href="#" icon={BsInstagram} />
                  <FooterIcon href="#" icon={BsTwitter} />
                  <FooterIcon href="#" icon={BsGithub} />
                  <FooterIcon href="#" icon={BsDribbble} />
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
