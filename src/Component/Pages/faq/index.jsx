import React from "react";
const FAQ = () => {
  return (
    <>
      <section class="bg-[#033540]">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20 text-[#a7d1d2] ">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div
              class="w-full lg:w-1/2 px-4 pt-2 lg:pb-2"
              data-aos="zoom-in-right"
              data-aos-duration="3000"
            >
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  Can I install/upload anything I want on there?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl ">
                  How can I migrate to another site?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div
              class="w-full lg:w-1/2 px-4 pb-2 lg:pt-2"
              data-aos="zoom-in-left"
              data-aos-duration="3000"
            >
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl ">
                  Can I change the domain you give me?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  How many sites I can create at once?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="question shadow-img mb-4 bg-gray-200  rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  How can I communicate with you?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
          {/* Question box */}
          <div
            class="relative grid justify-items-center mt-8"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-anchor-placement="top-center"
          >
            <div class="shadow-img bg-gray-200 max-w-full py-5 px-20 rounded-xl">
              <div class="text-center ">
                <h2 class="text-3xl font-bold text-[#033540] mb-4">
                  Any questions?
                </h2>
                <p class="text-gray-600 mb-6">
                  Our support team is always on call, and ready to help with all
                  your questions!
                </p>
                <div class="mt-6">
                  <button
                    class="shadow-img bg-[#033540] text-[#A7D1D2] hover:border border-[#A7D1D2]  px-4 py-2 rounded"
                    type="button"
                    data-modal-target="crud-modal"
                    data-modal-toggle="crud-modal"
                  >
                    Ask a question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Start */}
      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Ask a Question
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your name"
                    required=""
                  />
                </div>
                <div class="col-span-2 ">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Your E-mail"
                    required
                  />
                </div>

                <div class="col-span-2">
                  <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;
