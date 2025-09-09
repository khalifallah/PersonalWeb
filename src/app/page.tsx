"use client";
import Heros from "@/components/section/Heros";
import Aboutme from "@/components/section/Aboutme";
import Skills from "@/components/section/Skills";
import Porto from "@/components/section/Porto";
import Experience from "@/components/section/Experience";
import Testimonial from "@/components/section/Testimonial";
import Footer from "@/components/section/Footer";
import { useEffect, useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <div
        id="home"
        className={`navbar sticky top-0 z-50 w-full transition-colors duration-500 ease-in-out ${
          isScrolled ? "bg-base-100 shadow-md" : "bg-base-300"
        }`}
      >
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-lg sm:text-xl font-bold">
            MySite
          </a>
        </div>

        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-base">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#porto">Portfolio</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#footer" className="btn btn-primary text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-square"
            aria-label="Toggle menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-base-200 shadow-md">
          <ul className="menu menu-vertical p-3 text-base">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About Me
              </a>
            </li>
            <li>
              <a href="#porto" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#testimonial" onClick={() => setIsOpen(false)}>
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#footer"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary text-white mt-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <Heros />
      <Aboutme />
      <Skills />
      <Porto />
      <Experience />
      <Testimonial />
      <Footer />

      <div
        className={`transition-opacity duration-700 ease-in-out fixed bottom-4 right-4 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <a href="#heros">
          <IoChevronUpCircleOutline className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
