import React from "react";
import Link from "next/link";
import { Container } from "../../util/container";
import Logo from "../../../assets/img/hatch-head-logo-stacked.svg";
import SocialLinks from "../../SocialLinks";
export const Footer = () => {
  return (
    <footer className="bg-gray-1000 z-0 text-gray-50 dark:bg-black overflow-hidden">
      <Container className="relative" size="large">
        <div className="md:flex gap-6">
          <div className="flex-none mb-8">
            <Link
              className="flex items-center"
              href="/"
              aria-label="Go back to homepage"
            >
              <Logo width={80} className="mr-4" />
            </Link>
          </div>

          <div className="sm:px-8 md:flex flex-full w-full text-left grow justify-end">
            <div className="flex-1 flex flex-col gap-6 lg:text-left max-w-xl mx-auto  mb-8">
              <nav className="font-mono text-gray-400">
                <ul>
                  <li className="mb-4">
                    <Link href="/work">Work</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/about-us">About</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/what-we-do">Services</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex-1 flex flex-col gap-6 lg:text-left max-w-xl mx-auto  mb-8">
              <nav className="font-mono text-gray-400">
                <ul>
                  <li className="mb-4">
                    <Link href="/terms-and-conditions">
                      Terms and conditions
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex-1 flex flex-col gap-6 lg:items-start lg:text-left max-w-xl mx-auto">
              <h2>Social</h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-primary dark:bg-gold -skew-x-12 max-w-7xl mx-auto h-[86px] w-full" />
    </footer>
  );
};
