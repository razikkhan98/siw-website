import React from "react";
const FAQ = () => {
  return (
    <>
      {/* <section className="card">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center py-12 relative">
            <h2 className="text-4xl font-bold">FAQs</h2>
            <p className="text-lg mt-4">
              We are northui Team, Working together to build a clean web
            </p>
          </div> */}

      {/* <div class="w-[60%] ">
            <div class="question-bg bg-white rounded-3xl my-8">
              <div class="question relative flex items-center font-semibold text-xl">How do I verify my email?</div>
              <div class="answercont">
                <div class="answer">
                  Click the link in the verification email from
                  verify@codepen.io (be sure to check your spam folder or other
                  email tabs if it's not in your inbox). Or, send an email with
                  the subject "Verify" to verify@codepen.io from the email
                  address you use for your CodePen account.
                  <br />
                  <br />
                  <a href="https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2">
                    How to Verify Email Docs
                  </a>
                </div>
              </div>
            </div>

            <div class="question-bg bg-white rounded-3xl my-8">
              <div class="question relative flex items-center font-semibold text-xl">
                My Pen loads infinitely or crashes the browser.
              </div>
              <div class="answercont">
                <div class="answer">
                  It's likely an infinite loop in JavaScript that we could not
                  catch. To fix, add ?turn_off_js=true to the end of the URL (on
                  any page, like the Pen or Project editor, your Profile page,
                  or the Dashboard) to temporarily turn off JavaScript. When
                  you're ready to run the JavaScript again, remove
                  ?turn_off_js=true and refresh the page.
                  <br />
                  <br />

                  <a href="https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/">
                    How to Disable JavaScript Docs
                  </a>
                </div>
              </div>
            </div>

            <div class="question-bg bg-white rounded-3xl my-8">
              <div class="question relative flex items-center font-semibold	text-xl">How do I contact the creator of a Pen?</div>
              <div class="answercont">
                <div class="answer">
                  You can leave a comment on any public Pen. Click the
                  "Comments" link in the Pen editor view, or visit the Details
                  page.
                  <br />
                  <a href="https://blog.codepen.io/documentation/faq/how-do-i-contact-the-creator-of-a-pen/">
                    How to Contact Creator of a Pen Docs
                  </a>
                </div>
              </div>
            </div>

            <div class="question-bg bg-white rounded-3xl my-8">
              <div class="question relative flex items-center font-semibold	text-xl">
                What version of [library] does CodePen use?
              </div>
              <div class="answercont">
                <div class="answer">
                  We have our current list of library versions{" "}
                  <a href="https://codepen.io/versions">here</a>
                </div>
              </div>
            </div>

            <div class="question-bg bg-white rounded-3xl my-8">
              <div class="question relative flex items-center font-semibold	text-xl">What are forks?</div>
              <div class="answercont">
                <div class="answer">
                  A fork is a complete copy of a Pen or Project that you can
                  save to your own account and modify. Your forked copy comes
                  with everything the original author wrote, including all of
                  the code and any dependencies.
                  <br />
                  <a href="https://blog.codepen.io/documentation/features/forks/">
                    Learn More About Forks
                  </a>
                </div>
              </div>
            </div>
          </div> */}

      {/* <!-- component --> */}
      <div>
        <section class="card ">
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
          </div>
        </section>
      </div>

      {/* </div>
      </section> */}
    </>
  );
};
export default FAQ;
