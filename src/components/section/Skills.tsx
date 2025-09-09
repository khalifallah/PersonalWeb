import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="bg-base-100 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="
            timeline timeline-vertical lg:timeline-horizontal
            place-content-center items-stretch
            font-extrabold text-lg sm:text-xl lg:text-2xl
            gap-6 lg:gap-8
          "
        >
          <li className="min-w-[14rem] sm:min-w-[16rem]">
            <div className="timeline-start lg:timeline-start text-base sm:text-lg">
              Skills Base
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.8 2.5a.75.75 0 001.137-.089l4-8.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box px-5 py-3 text-center text-base sm:text-lg">
              JavaScript <br /> TypeScript <br /> Python
            </div>
            <hr className="hidden lg:block" />
          </li>

          <li className="min-w-[14rem] sm:min-w-[16rem]">
            <hr className="hidden lg:block" />
            <div className="timeline-start text-base sm:text-lg">Front End</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.8 2.5a.75.75 0 001.137-.089l4-8.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box px-5 py-3 text-center text-base sm:text-lg">
              HTML &amp; CSS <br /> React / Next.js <br /> Tailwind CSS
            </div>
            <hr className="hidden lg:block" />
          </li>

          <li className="min-w-[14rem] sm:min-w-[16rem]">
            <hr className="hidden lg:block" />
            <div className="timeline-start text-base sm:text-lg">Back End</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.8 2.5a.75.75 0 001.137-.089l4-8.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box px-5 py-3 text-center text-base sm:text-lg">
              Node.js <br /> DBeaver <br /> Postman
            </div>
            <hr className="hidden lg:block" />
          </li>

          <li className="min-w-[14rem] sm:min-w-[16rem]">
            <hr className="hidden lg:block" />
            <div className="timeline-start text-base sm:text-lg">
              Data Analyst
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 sm:h-10 sm:w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.8 2.5a.75.75 0 001.137-.089l4-8.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box px-5 py-3 text-center text-base sm:text-lg">
              MySQL <br /> Tableau <br /> Excel
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
