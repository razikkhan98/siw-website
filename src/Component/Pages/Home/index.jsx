import React from "react";
import Navbar from "../../Common/Navbar/index";

import { MdManageAccounts } from "react-icons/md";


const Home = () => {
  return (
    <>
      <div class="home-img">
        <Navbar />
        <div class="grid gap-6 grid-cols-1 flex max-h-54 lg:justify-center lg:items-center absolute inset-0">
          <section class="dark:bg-gray-900 ">
            <div class="px-4 text-center">
              <p class="mb-2 text-1xl font-extrabold text-white lg:text-xl sm:px-16 lg:px-48">
                Welcome To Our Website
              </p>
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                Skill Intelligence World
              </h1>
              <p class="mb-5 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  href="#"
                  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="cards sm:h-auto max-w-screen-xl mx-auto gap-20 grid grid-cols-3 absolute inset-x-0 -bottom-10">
          <figure className="sm:max-w-sm h-fit w-fit bg-indigo-500 p-6 rounded-md shadow-2xl">
            <div className="icon text-6xl text-white h-16 flex items-center justify-center">
              <MdManageAccounts />
            </div>
            <div class="text-center space-y-4">
              <blockquote>
                <p class="text-lg font-medium text-white">
                 “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s adapts to any design.”
                </p>
              </blockquote>
              <figcaption class="font-medium text-white">
                <div class="font-bold">Sarah Dayan</div>
                <div class="">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>

          <figure className="sm:max-w-sm h-fit w-fit bg-indigo-500 p-6 rounded-md">
            <div className="icon text-6xl text-white w-full h-16 flex items-center justify-center">
              <MdManageAccounts />
            </div>
            <div class="text-center space-y-4">
              <blockquote>
                <p class="text-lg font-medium text-white">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s adapts to any design.”
                </p>
              </blockquote>
              <figcaption class="font-medium text-white">
                <div class="font-bold">Sarah Dayan</div>
                <div class="">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>

          <figure className="sm:max-w-sm h-fit w-fit bg-indigo-500 p-6 rounded-md">
            <div className="icon text-6xl text-white w-full h-16 flex items-center justify-center">
              <MdManageAccounts />
            </div>
            <div class="text-center space-y-4">
              <blockquote>
                <p class="text-lg font-medium text-white">
                “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s adapts to any design.”
                </p>
              </blockquote>
              <figcaption class="font-medium text-white">
                <div class="font-bold">Sarah Dayan</div>
                <div class="">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>

        </div>
      </div>
    </>
  );
};

export default Home;
