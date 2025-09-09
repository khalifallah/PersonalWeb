/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SiInstagram } from "react-icons/si";

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-base-100 py-10">
      {/* heading */}
      <div className="grid grid-cols-5 items-center pb-6 px-4 sm:px-6 lg:px-16">
        <hr className="col-span-2 border-base-300" />
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center">
          TESTIMONIAL
        </h1>
        <hr className="col-span-2 border-base-300" />
      </div>

      {/* testimonial list */}
      <ul className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-16">
        {/* item */}
        <li className="flex flex-col sm:flex-row gap-4 p-5 rounded-lg hover:bg-base-200 transition">
          {/* profile + text */}
          <div className="flex gap-3 flex-1">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full shadow-md flex-shrink-0"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              alt="Profile"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-base sm:text-lg">Dio Lupa</h3>
              <span className="text-xs sm:text-sm uppercase font-semibold opacity-60">
                Remaining Reason
              </span>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-snug">
                "Remaining Reason" became an instant hit, praised for its
                haunting sound and emotional depth. A viral track loved for its
                emotion and resonance.
              </p>
            </div>
          </div>
          {/* instagram */}
          <div className="flex justify-end sm:items-end mt-2 sm:mt-0">
            <a
              href="https://www.instagram.com/dualipa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <SiInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>
        </li>

        {/* item kedua */}
        <li className="flex flex-col sm:flex-row gap-4 p-5 rounded-lg hover:bg-base-200 transition">
          <div className="flex gap-3 flex-1">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full shadow-md flex-shrink-0"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              alt="Profile"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-base sm:text-lg">Dio Lupa</h3>
              <span className="text-xs sm:text-sm uppercase font-semibold opacity-60">
                Remaining Reason
              </span>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-snug">
                "Remaining Reason" became an instant hit, praised for its
                haunting sound and emotional depth. A viral track loved for its
                emotion and resonance.
              </p>
            </div>
          </div>
          <div className="flex justify-end sm:items-end mt-2 sm:mt-0">
            <a
              href="https://www.instagram.com/dualipa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <SiInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
