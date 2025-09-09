import React from "react";

export default function Aboutme() {
  return (
    <section className="bg-base-100">
      <div className="bg-base-200 px-4 sm:px-6 lg:px-16 py-6">
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-4 text-center text-lg sm:text-xl lg:text-2xl font-bold tracking-widest overflow-x-auto">
          <div className="flex-shrink-0">JavaScript</div>
          <div className="flex-shrink-0">TypeScript</div>
          <div className="flex-shrink-0">HTML</div>
          <div className="flex-shrink-0">CSS</div>
          <div className="flex-shrink-0">React</div>
          <div className="flex-shrink-0">Python</div>
          <div className="flex-shrink-0">MySQL</div>
        </div>
      </div>

      <div
        id="about"
        className="container mx-auto px-4 sm:px-6 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start"
      >
        <div className="lg:col-span-2 text-center lg:text-right">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Key Values</h2>
          <p className="text-base sm:text-lg text-gray-600">
            I value writing clean code, delivering work on time, and maintaining
            clear communication.
          </p>
        </div>

        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600">
            I’m a Fullstack Web Developer with a strong passion for building
            modern and user-friendly applications. My journey in tech began with
            a deep curiosity about how things work on the web, and it has grown
            into a focus on creating clean, scalable, and efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
