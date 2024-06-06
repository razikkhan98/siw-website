import React from "react";
const FAQ = () => {
  return (
    <>
        <section class="bg-gradient">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20 ">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 pt-2 lg:pb-2">
                <details class="question mb-4 bg-gray-200 rounded-xl">
                  <summary class="font-semibold bg-gray-200 rounded-xl">
                    How Long is this site live?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="question mb-4 bg-gray-200 rounded-xl">
                  <summary class="font-semibold bg-gray-200 rounded-xl">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="question mb-4 bg-gray-200 rounded-xl">
                  <summary class="font-semibold  bg-gray-200 rounded-xl ">
                    How can I migrate to another site?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 pb-2 lg:pt-2">
                <details class="question mb-4 bg-gray-200 rounded-xl">
                  <summary class="font-semibold  bg-gray-200 rounded-xl ">
                    Can I change the domain you give me?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="question mb-4 bg-gray-200 rounded-xl">
                  <summary class="font-semibold  bg-gray-200 rounded-xl">
                    How many sites I can create at once?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="question mb-4 bg-gray-200 rounded-xl">
                  <summary class="font-semibold  bg-gray-200 rounded-xl">
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
 <div class="relative grid justify-items-center mt-8">
      <div class="max-w-full py-5 px-20 bg-white rounded-xl">
        <div class="text-center ">
          <h2 class="text-3xl font-bold mb-4">Any questions?</h2>
          <p class="text-gray-600 mb-6">
            Our support team is always on call, and ready to help with all your questions!
          </p>
          <div class="mt-6">
            <button
              class="bg-blue-700 text-white border border-blue-500 px-4 py-2 rounded"
              data-bs-target="#modal-ask"
              type="button"
              data-bs-toggle="modal"
            >
              Ask a question
            </button>
          </div>
        </div>
      </div>
    </div>

          </div>
        </section>

   
    </>
  );
};
export default FAQ;
