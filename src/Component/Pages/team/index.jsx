import React, { useState, useEffect } from "react";
import Avatar from "../../assets/img/team/avatar.jpg";
import Avatar2 from "../../assets/img/team/avatar2.avif";
import Avatar4 from "../../assets/img/team/avatar4.png";
import Avatar5 from "../../assets/img/team/avatar5.png";
import Avatar6 from "../../assets/img/team/avatar6.jpg";
import Avatar7 from "../../assets/img/team/avatar7.png";
import Avatar8 from "../../assets/img/team/avatar8.jpg";
import Avatar9 from "../../assets/img/team/avatar16.jpg";
// import Avatar10 from "../../assets/img/team/avatar11.jpeg"
import Avatar11 from "../../assets/img/team/avatar12.jpg";
import Avatar12 from "../../assets/img/team/avatar13.jpg";
import Avatar15 from "../../assets/img/team/avatar15.jpg";

const Team = () => {
  const [currentCard, setCurrentCard] = useState("m1");

  const cardData = [
    {
      id: "m1",
      image: Avatar,
      name: "SAYYED FAIZAN ALI",
      title: "CTO & CEO",
      experience: "10 Years Experience",
      bio: "Specialization :- Automation, Python, Cloud, Machine Learning, Data Science, Cryptocurrencies, Financial Assistant & Business Analyst.",
      education: "Qualification : B.tech"
    },
    {
      id: "m2",
      image: Avatar4,
      name: "MOHAMMAD SHOEB KHAN",
      title: "HR MANAGER & DIRECTOR",
      experience: "10 Years Experience",
      bio: "Specialization:- Human Resource Development, Training & Placement, Marketing Accounting.",
      education: "Qualification: MBA"
    },
    {
      id: "m3",
      image: Avatar5,
      name: "MOHAMMAD ZOEB KHAN",
      title: "CMO & CONSULTANT",
      experience: "9 Years Experience",
      bio: "Specialization:- Accounting & Financial Specialist, Advisor & Consultant, Marketing, .",
      education: "Qualification: MBA",
    },
    {
      id: "m11",
      image: Avatar11,
      name: "ADIBA KHAN",
      title: "Head Manager",
      experience: "7+ Years Experience",
      bio: "Social Media Manager, Team Manager, Business Developer, Marketing Specialist, Resource Management, Talent Development, Decision Making, Reporting and Analysis, Performance Management, Project Management, Strategic Planning, Conflict Resolution.",
      education: "Qualification: LLB.",
    },
    {
      id: "m4",
      image: Avatar6,
      name: "RAZIK KHAN",
      title: "SENIOR SOFTWARE DEVELOPER",
      experience: "3 Years Experience",
      bio: "Technologies:- React js, tailwind Css, Css, Html, Js, Node js, React Native.",
      education:"Qualification: B.tech"
    },
    {
      id: "m5",
      image: Avatar2,
      name: "MOHAMMAD NOOR",
      title: "JUNIOR BUSINESS ANALYST",
      experience: "2 Years Experience",
      bio: "Techologies:- MsExcel, Python, Figma, SQL, Marketing Tools.",
      education: "Qualification: B.sc"
    },
    {
      id: "m6",
      image: Avatar8,
      name: "HIMANSHU VERMA",
      title: "JUNIOR SOFTWARE ENGINEER",
      experience: "2 Years Experience",
      bio: "Technologies:- React js, Tailwind Css, Css, Html, Java Script.",
      education: "Qualification: B.tech"
    },
    {
      id: "m9",
      image: Avatar12,
      name: "SHUMAILA KHAN",
      title: "Front End Developer",
      experience: "1 Years Experience",    
      bio: "Technologies:- Html, Css, Tailwind Css, Javascript, React js.",
      education: "Qualification: B.sc(CS)",
    },
    {
      id: "m7",
      image: Avatar7,
      name: "USMAN WASIM HASAN",
      title: "Full Stack Developer",
      experience: "2+ Years Experience",
      bio: "Technologies:- Angular, React js, Ionic, Electron, Meteor.js, Node.js, Next.js, Nust.js, D3.js, Vanilla.js, Express, React Native, Flutter, Typescript, MongoDB, Mongoose, AWS, MySQL, Google Console.",
      education: "Qualification: B.tech(CS)"
      
    },
    {
      id: "m8",
      image: Avatar9 ,
      name: "JUNED ABBASI",
      title: "Front End Developer",
      experience: "1 Years Experience",
      bio: "Technologies:- Html, Css, Tailwind Css, Javascript, React js.",
      education: "Qualification: B.sc(CS)",
    },
    
    {
      id: "m10",
      image: Avatar15,
      name: "AREEBA MUJEEB",
      title: "Front End Developer",
      experience: "1 Years Experience",  
      bio: "Technologies:- Html, Css, Javascript, React js.",
      education: "Qualification: B.Tech(AI & ML).",
    },
    
  ];

  useEffect(() => {
    setCurrentCard("m1");
  }, []);

  return (
    <>
      <section className="team background-color-sherpa-blue">
        <div
          className="container mx-auto max-w-screen-xl pt-14 pb-8"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="text-center text-[#a7d1d2] py-10">
            <div className="service-head flex items-center justify-center">
              <div className="flex flex-col items-end mx-3">
                <div className="h-1 w-7 bg-[#87acb5] inline-block mb-2"></div>
                <div className="h-1 w-16 bg-[#87acb5] inline-block"></div>
              </div>
              <div className="inline-block text-4xl text-[#a7d1d2] font-semibold">
                Our Team
              </div>
              <div className="flex flex-col mx-3">
                <div className="h-1 w-7 bg-[#87acb5] inline-block mb-2"></div>
                <div className="h-1 w-16 bg-[#87acb5] inline-block"></div>
              </div>
            </div>
            <h6 className="text-lg mt-4">
              Meet our skilled professionals who bring a wealth of experience to
              your learning journey.
            </h6>
          </div>
          <div className="snap-x flex overflow-x-auto mb-10">
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
                  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 ">
                    <img
                      src={link.image}
                      alt="Loading"
                      className="w-52 h-56 object-cover rounded-lg "
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark mb-2">
                      {link.name}
                    </div>
                    <div className="text-xl text-yellow-500 mb-4">
                      {link.title}
                    </div>
                    <div className="text-dark text-lg">
                      <p className="mb-1">{link.experience}</p>
                      <p>{link.bio}</p>
                      <p className="mt-2">{link.education}</p>
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
