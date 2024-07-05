import React from "react";

// Images
import Team1 from "../../assets/img/team/membr-1.png";
import Team2 from "../../assets/img/team/member-2.png";
import Team3 from "../../assets/img/team-3.jpg";
import Team4 from "../../assets/img/team/member-3.png";
import Team5 from "../../assets/img/team/member-4.png";

const Work = () => {
  const teamData = [
    {
      title: " UX DESIGNER",
      name: "John Deo",
      image: Team1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime officia pariatur aliquam voluptatum iure minus consequuntur eius aspernatur adipisci doloribus, ipsum qui cum unde repellendus beatae, fugiat officiis. Laborum, aspernatur? consequuntur eius aspernatur adipisci doloribus, ipsum qui cum unde repellendus beatae, fugiat officiis. Laborum, aspernatur? ",
    },
    {
      title: "WEB DESIGNER",
      name: "Johny",
      image: Team2,
      description:
        "A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills. They need to be able to visualise how a site will look (the graphical design of the site) and how it will function (conversion of a design into a working website). The term Web Designer is often incorrectly interchanged with the term Web Developer and vice versa.  A web developer is often more likely to be a software developer who works with programming languages to create a higher level of interactions on a website such as the integration with a database system ",
    },
    {
      title: "FRONT-END DEVELOPER",
      name: "Vicky",
      image: Team3,
      description:
        "A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer. The demand and flexibility of this position translate into many career opportunities across various industries and locations. Whether that means working with a non-profit organization, starting your own freelance business, or being an in-house developer for a company, you’ll likely have the chance to find a role that fits your interests.",
    },
    {
      title: "BACK-END DEVELOPER",
      name: "Bob Leo",
      image: Team4,
      description:
        "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Back-end development means working on server-side software, which focuses on everything you can’t see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. They use code that helps browsers communicate with databases, store, understand, and delete data.",
    },
    {
      title: " WEB DESIGNER",
      name: "Jack ",
      image: Team5,
      description:
        "A web designer is an IT professional who is responsible for designing the layout, visual appearance and the usability of a website. A good web designer needs to have both creative graphic skills and technical skills. They need to be able to visualise how a site will look (the graphical design of the site) and how it will function (conversion of a design into a working website). The term Web Designer is often incorrectly interchanged with the term Web Developer and vice versa.  A web developer is often more likely to be a software developer who works with programming languages to create a higher level of interactions on a website such as the integration with a database system ",
    },
  ];

  return (
    <>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative bg-[#033540] w-full h-screen overflow-hidden">
          {/* <!-- Item Start --> */}
          {teamData.map((link, index) => (
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="grid grid-cols-1 md:grid-cols-2 p-20 gap-10">
                <div className="text-left text-[#a7d1d2]">
                  <h1 className="font-bold text-4xl mb-5 uppercase">
                    {link.title}
                  </h1>
                  <h3 className="font-semibold text-2xl mb-8"> {link.name} </h3>
                  <p> {link.description} </p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <img
                      src={link.image}
                      class="absolute block max-h-96"
                      alt="Loading"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <!-- Item End --> */}
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute z-30 bg-emerald-100/25 w-full p-10 flex justify-evenly -translate-x-1/2 bottom-0 left-1/2 ">
          <button
            type="button"
            class="w-20 h-20 rounded-full me-2"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          >
            <img
              src={Team1}
              className="h-20 w-20 rounded-full focus:ring-4"
              alt="Loading"
            />
            <h1 className="font-bold text-lg">John Deo</h1>
          </button>
          <button
            type="button"
            class="w-20 h-20 rounded-full me-2"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          >
            <img src={Team2} className="h-20 w-20 rounded-full" alt="Loading" />
            <h1 className="font-bold text-lg">Johny</h1>
          </button>
          <button
            type="button"
            class="w-20 h-20 rounded-full me-2"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          >
            <img src={Team3} className="h-20 w-20 rounded-full" alt="Loading" />
            <h1 className="font-bold text-lg">Vicky</h1>
          </button>
          <button
            type="button"
            class="w-20 h-20 rounded-full me-2"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          >
            <img src={Team4} className="h-20 w-20 rounded-full" alt="Loading" />
            <h1 className="font-bold text-lg">Bob Lio</h1>
          </button>
          <button
            type="button"
            class="w-20 h-20 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          >
            <img src={Team5} className="h-20 w- rounded-full" alt="Loading" />
            <h1 className="font-bold text-lg">Jack</h1>
          </button>
        </div>

        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
export default Work;
