import React, { useState } from "react";

import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
const FAQ = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <section class="background-color-sherpa-blue">
        <div class="container px-5 pt-28 pb-24 mx-auto">
          <div class="text-center mb-14 text-[#a7d1d2]">
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
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl">
                  What technologies do you use?
                </summary>

                <span>
                  <p>
                    We in IFT utilize technologies depending on the type of
                    projects we are working on. The technologies on which we
                    generally work on and have expertise in are : Front-end :-
                    HTML, CSS, JavaScript and frameworks like React, Angular, or
                    Vue.js, Back-end :- Python, Java, C#, PHP, Node.js,
                    Databases :- MySQL, Oracle, MongoDB, etc. , For Version
                    Control :- Git tools , project management tools like :- Jira
                    and Asana.
                  </p>
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl">
                  What qualifications do you need to trade stocks ?
                </summary>

                <span>
                  <p>
                    Anyone can safely start investing/trading in stocks, but
                    there is always a risk of losing money. So, it's important
                    to approach it with proper research, education, and a
                    long-term perspective. Hence, it's better to have a degree
                    in relevant subjects like management, business, economy or
                    finance.
                  </p>
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  How do you approach risk management in your trading
                  strategies?
                </summary>

                <span>
                  <p>
                    By integrating strategies like Diversification, Stop-Loss
                    Orders, Continuous Monitoring, Utilizing advanced technology
                    and algorithms and regularly conducting stress tests to
                    assess how different scenarios could impact portfolios, we
                    effectively navigate the complexities of the financial
                    markets and protect capital against various risks.
                  </p>
                </span>
              </details>
            </div>
            <div
              class="w-full lg:w-1/2 px-4 pb-2 lg:pt-2"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl">
                  Do you provide maintenance and updates in the Projects ?
                </summary>

                <span>
                  <p>
                    Yes, we ensure that a project, such as software or a system,
                    remains functional, secure, and relevant over time. This
                    include bug fixes, performance improvements, security
                    updates, feature enhancements, compliance and backup and
                    Recovery of the software.
                  </p>
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  Is a degree necessary to succeed in IT, or are there
                  Alternative routes?
                </summary>

                <span>
                  <p>
                    No, In IT sector having a degree is not necessary where
                    skills and experience often hold more weight than formal
                    education but having one can give you advantage when finding
                    a job. Building a strong portfolio, having relevant
                    certifications, participating in internships, and showcasing
                    your abilities through projects or freelance work can all
                    help you secure a job in the tech industry without a degree.
                  </p>
                </span>
              </details>
              <details class="question shadow-img mb-4 bg-gray-200  rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  How do I find entry-level jobs in IT companies?
                </summary>

                <span>
                  <p>
                    You can easily get an entry-level job in a IT company if you
                    have skills and experience in working on web-development on
                    your own. If not, then you can develop web development
                    skills by doing a certification course in front-end ,
                    backend or full-stack development.
                  </p>
                </span>
              </details>
            </div>
          </div>

          {/* Question box */}
          <div
            class="relative grid justify-items-center mt-6"
            // data-aos="zoom-in-down"
            // data-aos-duration="500"
            // data-aos-anchor-placement="top-center"
          >
            <div class="shadow-img bg-gray-200 max-w-full py-5 px-20 rounded-xl">
              <div class="text-center ">
                <h2 class="text-3xl font-bold text-color-sherpa-blue mb-4">
                  Any questions?
                </h2>
                <p class="text-gray-600 mb-6">
                  Our support team is always on call, and ready to help with all
                  your questions!
                </p>
                <div class="mt-6">
                  <button
                    onClick={() => setOpenModal(true)}
                    class="shadow-img background-color-sherpa-blue text-[#A7D1D2] hover:border border-[#A7D1D2]  px-4 py-2 rounded"
                    type="button"
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
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={onCloseModal}
        className="pt-36"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6">
            <h3 className="text-xl font-medium text-gray-900">
              Ask a Question
            </h3>
            <div>
              <div className="mb-2 block">
                <Label
                  className="dark:text-dark"
                  htmlFor="username"
                  value="Name"
                />
              </div>
              <TextInput
                id="username"
                placeholder="Enter Your Name"
                type="text"
                sizing="lg"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="dark:text-dark"
                  htmlFor="email"
                  value="Your Email"
                />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                sizing="lg"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  className="dark:text-dark"
                  htmlFor="comment"
                  value="Your Question"
                />
              </div>
              <Textarea id="comment" type="text" required rows={4} />
            </div>
            <div>
              <div className="w-full mb-5">
                <Button className="bg-[#033540] px-4">Send</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default FAQ;
