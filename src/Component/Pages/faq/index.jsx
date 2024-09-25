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
                  Information About Business ?
                </summary>

                <span>
                  <p>1. Intelligence Fusion Technology</p>
                  <p>
                    :- We provide a range of IT services including software
                    development, IT consulting, cybersecurity solutions, and
                    cloud computing services.
                  </p>
                </span>
                <span>
                  <br />
                  <p>2. Skill Educator</p>
                  <p>
                    We offer a variety of IT training programs, including
                    courses on programming languages, web development,
                    cybersecurity, and data analytics.
                  </p>
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  Our Previous Project
                </summary>

                <span>
                  <p>
                    1.{" "}
                    <a
                      href="https://rumeno.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rumeno
                    </a>
                  </p>
                  <p>
                    The objective of the Rumeno project was to develop an online
                    platform for the sale and distribution of animal food and
                    medicine products, enhancing accessibility for pet owners
                    and farmers. Rumeno saw an increase in sales and customer
                    engagement, as well as improved brand reputation due to the
                    accessible and informative platform we developed.
                  </p>
                </span>
                <span>
                  <p>
                    2.{" "}
                    <a
                      href="https://superchicks.online/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Super Chicks
                    </a>
                  </p>
                  <p>
                    The Super Chiks project focused on developing a
                    user-friendly mobile application for ordering food, aimed at
                    enhancing customer convenience and increasing sales. We
                    implemented industry-standard security measures, including
                    data encryption and secure payment gateways, to protect user
                    information and transactions.
                  </p>
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold rounded-xl">
                  Client Satisfaction
                </summary>

                <span>
                  <p>1. Client Satisfaction On Rumeno</p>
                  <p>
                    Rumeno reported high levels of satisfaction with the
                    user-friendly interface, efficient checkout process, and the
                    positive impact on their sales and customer engagement.
                  </p>
                </span>
                <span>
                  <p>2. Client satisfaction on Super Chicks</p>
                  <p>
                    Super Chiks expressed satisfaction with the app’s intuitive
                    design, ease of use, and its positive impact on their
                    business. High client satisfaction has led to increased
                    customer retention, higher sales volume, and an improved
                    brand reputation in the competitive food delivery market.
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
                <summary class="font-semibold rounded-xl">Competitor</summary>

                <span>
                  Our main competitors include other IT service providers,
                  software development companies, and consulting firms that
                  offer similar services in software development, cybersecurity,
                  and IT consulting. We differentiate ourselves through our
                  tailored solutions, focus on customer collaboration, and
                  commitment to using the latest technologies to ensure
                  high-quality outcomes. We conduct regular market analysis,
                  attend industry conferences, and utilize tools for competitive
                  intelligence to stay informed about our competitors’ offerings
                  and strategies.
                </span>
              </details>
              <details class="question shadow-img bg-gray-200 mb-4 rounded-xl">
                <summary class="font-semibold  rounded-xl">
                  Education Related
                </summary>

                <span>
                  We offer a variety of programs, including courses in
                  programming languages such as HTML,CSS, JAVASCRIPT, REACT,
                  NODE, PYTHON, ANGULAR. We provide courses for all skill
                  levels, from complete beginners to advanced learners, ensuring
                  everyone can find a suitable program. Our instructors are
                  experienced professionals with backgrounds in the IT industry,
                  ensuring that students receive practical knowledge and
                  insights relevant to current job markets.
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
