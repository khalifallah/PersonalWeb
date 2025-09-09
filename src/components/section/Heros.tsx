/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Heros() {
  return (
    <section id="heros" className="bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero py-10 sm:py-14 lg:py-20">
          <div className="hero-content w-full flex-col lg:flex-row-reverse gap-6 lg:gap-10">
            <div className="w-full flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[12rem] sm:max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] aspect-square rounded-2xl overflow-hidden shadow-2xl bg-base-200">
                <img
                  src="/Img/profile1.jpg"
                  alt="Portrait of Khalifallah El Aziz"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full text-center lg:text-left">
              <p className="text-sm sm:text-base text-base-content/70">
                hi, i'm
              </p>
              <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Khalifallah El Aziz
              </h1>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl text-base-content/80">
                Full Stack Web Developer
              </h2>

              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-base-content/80 max-w-prose mx-auto lg:mx-0">
                A passionate web developer who loves creating clean, fast, and
                easy-to-use websites.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-3">
                <a href="#footer" className="w-full sm:w-auto">
                  <button className="btn btn-primary w-full sm:w-auto">
                    Contact Me
                  </button>
                </a>
                <a href="#porto" className="w-full sm:w-auto">
                  <button className="btn btn-outline w-full sm:w-auto">
                    See Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
