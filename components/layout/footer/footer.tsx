import React from "react";
import Link from "next/link";
import { Container } from "../../util/container";
import Logo from "../../../assets/img/hatch-head-logo-stacked.svg";
import SocialLinks from "../../SocialLinks";
import { LineSpace } from "iconoir-react";
import NavLink from "../NavLink";
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

          <div className="sm:px-8 md:flex flex-1 w-full text-left grow justify-end">
            <div className="flex-full flex flex-col gap-6 lg:text-left max-w-xl mx-auto  mb-8">
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
                  <Link href="/terms-and-conditions">
                    Terms and conditions
                  </Link>
                </ul>
              </nav>
            </div>

            <div className="sm:px-8 md:flex flex-2 text-left grow justify-end">
              <div className="flex-full flex flex-col gap-6 lg:text-left max-w-xl mx-auto  mb-8">
                <nav className="font-mono text-gray-400">
                  <ul>



                    <h2 className="mb-4">Main Office</h2>

                    <NavLink href="https://goo.gl/maps/Lm1QYKLREKNqQjut8"> <p>Suite 26 / 53 Vernon Tce,</p>
                      <p className="mb-4">Teneriffe, QLD 4005</p></NavLink>

                    <p>Open Monday - Friday, 9am - 5pm</p>
                    <NavLink href="tel:+61744287662">+61 (07) 4428 7662</NavLink>

                  </ul>
                </nav>
              </div>
            </div>

            <div className="flex-2 flex flex-col gap-6 lg:items-start lg:text-left max-w-xl mx-auto">
              <nav className="font-mono text-gray-400">
                <h2>Social</h2>
              </nav>
              <SocialLinks />

            </div>
          </div>
        </div>
      </Container>
      <div className="bg-primary dark:bg-gold -skew-x-12 max-w-7xl mx-auto h-[86px] w-full" />
    </footer >
  );
};
