import React,{useState} from "react";


import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
const FAQ = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  
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
              data-aos="zoom-in-up"
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
              data-aos="zoom-in-up"
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
            data-aos="zoom-in-up"
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
                  <button onClick={() => setOpenModal(true)}
                    class="shadow-img bg-[#033540] text-[#A7D1D2] hover:border border-[#A7D1D2]  px-4 py-2 rounded"
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
      <Modal show={openModal} size="md" popup onClose={onCloseModal} >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6">
            <h3 className="text-xl font-medium text-gray-900">Ask a Question</h3>
            <div>
              <div className="mb-2 block">
                <Label className="dark:text-dark" htmlFor="username" value="Name" />
              </div>
              <TextInput id="username"
              placeholder="Enter Your Name"
              type="text" sizing="lg" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label className="dark:text-dark" htmlFor="email" value="Your Email" />
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
                <Label className="dark:text-dark" htmlFor="comment" value="Your Question" />
              </div>
              <Textarea id="comment"  type="text" required rows={4} />
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
