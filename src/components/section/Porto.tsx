/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Porto() {
  return (
    <section id="porto" className="bg-base-100 pt-10 pb-10">
      <div className="grid grid-cols-5 items-center pb-6 px-4 sm:px-6 lg:px-16">
        <hr className="col-span-2 border-base-300" />
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center">
          PORTOFOLIO
        </h1>
        <hr className="col-span-2 border-base-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 place-items-center">
          <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
            <figure className="aspect-video bg-base-200 overflow-hidden">
              <img
                src="/img/porto1.png"
                alt="New York Taxi Project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center font-extrabold">
                New York Taxi
              </h2>
              <p className="text-center text-sm sm:text-base text-base-content/80">
                Tableau, SQL, Excel, Python (data preprocessing)
              </p>
              <div className="card-actions justify-center pt-3">
                <Link href="/porto/porto1">
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
            <figure className="aspect-video bg-base-200 overflow-hidden">
              <img
                src="/img/porto1.png"
                alt="New York Taxi Project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center font-extrabold">
                New York Taxi
              </h2>
              <p className="text-center text-sm sm:text-base text-base-content/80">
                Tableau, SQL, Excel, Python (data preprocessing)
              </p>
              <div className="card-actions justify-center pt-3">
                <Link href="/porto/porto1">
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
            <figure className="aspect-video bg-base-200 overflow-hidden">
              <img
                src="/img/porto1.png"
                alt="New York Taxi Project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center font-extrabold">
                New York Taxi
              </h2>
              <p className="text-center text-sm sm:text-base text-base-content/80">
                Tableau, SQL, Excel, Python (data preprocessing)
              </p>
              <div className="card-actions justify-center pt-3">
                <Link href="/porto/porto1">
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
