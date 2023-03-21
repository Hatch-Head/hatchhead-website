import React from "react";
import Link from "next/link";
import Logo from "../../assets/img/logo.svg";
import DarkMode from "../../assets/img/darkMode.svg";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import SocialLinks from "../SocialLinks";
import { useState } from "react";

export const Header = () => {
  const scroll = useScrollPosition();

  const { theme, setTheme } = useTheme();

  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  const [isOpen, setIsOpen] = useState(false);

  const headerClass =
    scroll > 100
      ? "dark:bg-gray-1000 bg-gray-50 dark:text-white text-gray-1000"
      : " dark:text-white text-gray-1000";

  return (
    <div
      className={`fixed w-screen z-50 group transition-all duration-700 top-0 ${headerClass}`}
    >
      <div className={`relative z-10 container`}>
        <div className="flex items-center justify-between relative">
          <h4 className="select-none text-lg font-bold tracking-tight my-2 md:my-4 transition duration-150 ease-out transform">
            <Link
              href="/"
              aria-label="Go back to the homepage"
              className="flex items-center hover:text-primary dark:hover:text-gold transition-all"
            >
              <Logo className="mr-4 h-[24px] md:h-[38px]" />
              <div className="md:group-hover:opacity-100 group-hover:translate-x-0 -translate-x-6 opacity-0  md:w-[320px] transition-all">
                Hatch Head
              </div>
            </Link>
          </h4>

          <div
            className={`z-10 flex justify-center ${isOpen ? "text-white" : ""}`}
          >
            <button onClick={() => setIsOpen(!isOpen)} className="font-bold">
              {isOpen ? "Close" : "Menu"}
            </button>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-8"
            >
              <DarkMode />
            </button>
          </div>

          <div
            className={`absolute z-0 md:-right-8 top-0  w-screen overflow-visible flex items-end justify-end h-screen ${
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              }
            }}
          >
            <nav
              className={`h-screen relative w-screen p-8 lg:p-24 max-w-2xl transition duration-300 overflow-visible  scrollbar-hide bg-black text-white dark:text-neutral-50 dark:bg-neutral-900 ${
                !isOpen ? "translate-x-[100vw]" : ""
              }
              `}
            >
              <ul
                className="flex flex-col gap-2 pt-24 lg:gap-2 text-lg md:text-2xl font-bold mb-48 pointer-events-auto  before:-z-10 before:content-[''] before:transition before:duration-300 before:bg-black before:dark:bg-neutral-900 before:w-screen before:h-screen before:absolute before:top-0 before:left-0
"
              >
                <li className="animate-fadeDown" key={`${isOpen}-1`}>
                  <NavLink href="/work" aria-label="See our work">
                    Work
                  </NavLink>
                </li>
                <li
                  className="animate-fadeDown delay-[300ms]"
                  key={`${isOpen}-2`}
                >
                  <NavLink href="/about-us" aria-label="Read more about us">
                    About Us
                  </NavLink>
                </li>
                <li
                  className="animate-fadeDown delay-[600ms]"
                  key={`${isOpen}-3`}
                >
                  <NavLink
                    href="/what-we-do"
                    aria-label="Find out about our process"
                  >
                    What we do
                  </NavLink>
                </li>
                <li
                  className="animate-fadeDown delay-[900ms]"
                  key={`${isOpen}-4`}
                >
                  <NavLink
                    href="/about-you"
                    aria-label="Find out if you are a good fit for us"
                  >
                    About You
                  </NavLink>
                </li>
                <li
                  className="animate-fadeDown delay-[1200ms]"
                  key={`${isOpen}-5`}
                >
                  <NavLink
                    href="/insights"
                    aria-label="Find out if you are a good fit for us"
                  >
                    Insights
                  </NavLink>
                </li>
                <li
                  className="animate-fadeDown delay-[1500ms]"
                  key={`${isOpen}-6`}
                >
                  <NavLink
                    href="/contact-us"
                    aria-label="Find out if you are a good fit for us"
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>

              <SocialLinks />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
