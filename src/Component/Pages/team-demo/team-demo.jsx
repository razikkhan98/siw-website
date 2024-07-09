// import React from "react";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";
// import team1 from "../../assets/img/team/member-1.png";
// import team2 from "../../assets/img/team/member-2.png";
// import team3 from "../../assets/img/team/member-3.png";
// import team4 from "../../assets/img/team/member-4.png";
// // import team5 from "../../assets/img/team-3.jpg";
// const Teamdemo = () => {
//   const TeamMember = [team1, team2, team3, team4, team3];
//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <div className="flex justify-evenly ">
//             <img
//               className="h-20 w-20 rounded-full"
//               src={TeamMember[i]}
//               alt={`Member-${i + 1}`}
//             />
//           </div>
//         </a>
//       );
//     },
//     dots: true,
//     fade: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const teamData = [
//     {
//       title: " UX DESIGNER",
//       name: "John Deo",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime officia pariatur aliquam voluptatum iure minus consequuntur eius aspernatur adipisci doloribus, ipsum qui cum unde repellendus beatae, fugiat officiis. Laborum, aspernatur? consequuntur eius aspernatur adipisci doloribus, ipsum qui cum unde repellendus beatae, fugiat officiis. Laborum, aspernatur? ",
//     },
//     {
//       title: "WEB DESIGNER",
//       name: "Johny",
//       description:
//         "A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills. They need to be able to visualise how a site will look (the graphical design of the site) and how it will function (conversion of a design into a working website). The term Web Designer is often incorrectly interchanged with the term Web Developer and vice versa.  A web developer is often more likely to be a software developer who works with programming languages to create a higher level of interactions on a website such as the integration with a database system ",
//     },
//     {
//       title: "FRONT-END DEVELOPER",
//       name: "Vicky",
//       description:
//         "A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer. The demand and flexibility of this position translate into many career opportunities across various industries and locations. Whether that means working with a non-profit organization, starting your own freelance business, or being an in-house developer for a company, you’ll likely have the chance to find a role that fits your interests.",
//     },
//     {
//       title: "BACK-END DEVELOPER",
//       name: "Bob Leo",
//       description:
//         "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Back-end development means working on server-side software, which focuses on everything you can’t see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. They use code that helps browsers communicate with databases, store, understand, and delete data.",
//     },
//     {
//       title: " WEB DESIGNER",
//       name: "Jack ",
//       description:
//         "A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills. They need to be able to visualise how a site will look (the graphical design of the site) and how it will function (conversion of a design into a working website). The term Web Designer is often incorrectly interchanged with the term Web Developer and vice versa.  A web developer is often more likely to be a software developer who works with programming languages to create a higher level of interactions on a website such as the integration with a database system ",
//     },
//   ];

//   return (
//     <>
//       <div className=" relative">
//         <Slider {...settings}>
//           {teamData.map((link, index) => (
//             <div class="hidden duration-700 ease-in-out" data-carousel-item>
//               <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-10">
//                 <div className="text-justify text-[#a7d1d2]">
//                   <h1 className="font-bold text-4xl mb-5 uppercase">
//                     {link.title}
//                   </h1>
//                   <h3 className="font-semibold text-2xl mb-8"> {link.name} </h3>
//                   <p> {link.description} </p>
//                 </div>
//                 <div>
//                   <div key={index} className="flex justify-center">
//                     <img
//                       src={TeamMember[index]}
//                       class="absolute block max-h-96"
//                       alt={`Team Member ${index + 1}`}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// };
// export default Teamdemo;
