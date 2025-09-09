import React from "react";

type ExperienceItem = {
  period: string;
  title: string;
  desc: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2022–2026",
    title: "Student",
    desc: "I'm a student at Institut Teknologi Sepuluh Nopember.",
  },
  {
    period: "2025",
    title: "Bootcamp Web Developer",
    desc: "Built responsive pages with Next.js, Tailwind, and daisyUI.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-base-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end pb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold lg:col-span-2 lg:text-right">
            EXPERIENCE
          </h1>
          <div className="hidden lg:block lg:col-span-2 border-t-2 border-base-300" />
          <div className="block lg:hidden border-t border-base-300 col-span-1" />
        </div>

        <ul className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <li
              key={`${exp.period}-${exp.title}`}
              className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-6"
            >
              <time className="text-base sm:text-lg lg:text-2xl font-extrabold text-base-content/80 lg:text-right">
                {exp.period}
              </time>

              <div className="lg:col-span-3">
                <h2 className="text-xl sm:text-2xl font-extrabold underline underline-offset-2">
                  {exp.title}
                </h2>
                <p className="mt-1 text-sm sm:text-base text-base-content/80">
                  {exp.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
