import React from "react";
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-6">
            <a
              href="mailto:ehafi737@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="size-8" />
            </a>
            <a
              href="https://www.instagram.com/khalifallah.el/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="size-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/khalifallah-el-aziz-303244244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="size-8" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Personal Website</p>
        </aside>
      </footer>
    </section>
  );
}
