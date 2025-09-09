"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  IoChevronBackCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import Footer from "@/components/section/Footer";

export default function Porto1() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-base-100">
      <nav
        className={`navbar sticky top-0 z-50 w-full transition-colors duration-500 ${
          isScrolled ? "bg-base-100/95 backdrop-blur shadow-md" : "bg-base-300"
        }`}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-2">
            <Link
              href="/"
              className="btn btn-ghost text-lg sm:text-xl font-bold"
            >
              New York Taxi
            </Link>

            <ul className="hidden md:flex menu menu-horizontal gap-2 text-base">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#footer">Contact Me</a>
              </li>
              <li>
                <button
                  aria-label="Back"
                  onClick={() => router.back()}
                  className="btn btn-ghost btn-square"
                >
                  <IoChevronBackCircleOutline className="w-5 h-5" />
                </button>
              </li>
            </ul>

            <button
              className="md:hidden btn btn-ghost btn-square"
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-base-200 shadow">
          <ul className="menu menu-vertical p-3 text-base container mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <a href="#footer" onClick={() => setIsOpen(false)}>
                Contact Me
              </a>
            </li>
            <li>
              <button
                className="btn btn-ghost justify-start"
                onClick={() => {
                  setIsOpen(false);
                  router.back();
                }}
              >
                <IoChevronBackCircleOutline className="w-5 h-5 mr-2" />
                Back
              </button>
            </li>
          </ul>
        </div>
      )}

      <section
        id="figure"
        className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 pt-6 scroll-mt-24"
      >
        <figure className="w-full aspect-video bg-base-200 overflow-hidden rounded-xl">
          <img
            src="/img/porto1.png"
            alt="New York Taxi dashboard"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </section>

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-8">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6 pb-10 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold mb-2 xl:text-right">
              SITUATION
            </h2>
            <p className="text-sm sm:text-base text-base-content/80 xl:text-right leading-relaxed">
              The New York Taxi trip dataset was chosen as a case study because
              it contains a large amount of data and covers various aspects such
              as payment types, vendors, total trip costs, and tips. The main
              goal of this project was to analyze travel patterns and customer
              payment behaviors to generate insights that could support
              decision-making in the transportation business.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold mb-2">
              TASK
            </h2>
            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              My main responsibility was to clean the dataset, perform data
              exploration, and create an interactive dashboard that is easy to
              understand. This dashboard was expected to present the
              distribution of payment types, vendor performance, yearly trip
              cost trends, and tip comparisons across vendors.
            </p>
          </div>
        </section>

        <section className="pb-10 scroll-mt-24">
          <div className="grid grid-cols-1 xl:grid-cols-5 items-center pb-4">
            <div className="hidden xl:block xl:col-span-2 border-t border-base-300" />
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-center">
              ACTION
            </h2>
            <div className="hidden xl:block xl:col-span-2 border-t border-base-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-5">
                <h3 className="card-title text-base sm:text-lg">
                  Preprocessing
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                  Conducted data preprocessing using Python &amp; SQL (handling
                  duplicates, outliers, and missing values).
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-5">
                <h3 className="card-title text-base sm:text-lg">
                  Dashboard Design
                </h3>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm sm:text-base leading-relaxed text-base-content/80">
                  <li>
                    Bar chart of trip costs by payment type (cash, credit card,
                    dispute, etc.).
                  </li>
                  <li>Treemap showing the contribution of major vendors.</li>
                  <li>Line chart of total trip costs per year.</li>
                  <li>Tip comparison across vendors.</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-5">
                <h3 className="card-title text-base sm:text-lg">
                  Storytelling
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                  Applied data storytelling principles to make insights more
                  accessible for non-technical audiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-4 scroll-mt-24">
          <div className="grid grid-cols-1 xl:grid-cols-6 gap-x-4 gap-y-2 items-center pb-4">
            <div className="hidden xl:block xl:col-span-2 border-t border-base-300" />
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold xl:col-span-2 text-center">
              RESULT
            </h2>
            <div className="hidden xl:block xl:col-span-2 border-t border-base-300" />
          </div>
          <ul className="list-disc pl-5 text-sm sm:text-base leading-relaxed text-base-content/80 max-w-3xl mx-auto">
            <li>
              The dashboard successfully visualized the New York Taxi trip data
              comprehensively.
            </li>
            <li>
              Found that credit card payments dominated transactions (over
              900K).
            </li>
            <li>
              Vendor VeriFone Inc. led the market with the largest trip volume,
              while Creative Mobile contributed significantly in terms of tips.
            </li>
            <li>
              Trend analysis revealed a sharp increase in total trip costs in
              2023.
            </li>
            <li>
              This project enhanced my understanding of big data analysis and
              how to communicate findings effectively through interactive
              visualizations.
            </li>
          </ul>
        </section>
      </main>

      <div
        className={`transition-opacity duration-700 fixed bottom-4 right-4 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <a href="#figure" aria-label="Back to top">
          <IoChevronUpCircleOutline className="w-10 h-10" />
        </a>
      </div>

      <Footer />
    </div>
  );
}
