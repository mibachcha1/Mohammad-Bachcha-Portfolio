import { ArrowRightIcon} from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../fonts";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        closeMenu();
        scroll.scrollToTop();
    };

    return (
        <header className="md:sticky top-0 z-10" style={{ fontFamily: "Rubik, sans-serif", backgroundColor:"rgb(10,10,25)"}}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <Link
                    to="top"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-70}
                    onClick={scrollToTop}
                    className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer"
                >
                    Mohammad Bachcha
                </Link>

                {/* Render on the left side for desktop */}
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-70}
                        onClick={closeMenu}
                        className="mr-5 hover:text-white cursor-pointer"
                    >
                        Projects
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-70}
                        onClick={closeMenu}
                        className="mr-5 hover:text-white cursor-pointer"
                    >
                        Skills
                    </Link>

                    <a
                        href="./Mohammad-Bachcha-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="mr-5 hover:text-white cursor-pointer"
                    >
                        Resume
                    </a>
                </nav>

                    {!isMenuOpen && (
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-70}
                            onClick={closeMenu}
                            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                        >
                            Contact Me
                            <ArrowRightIcon className="w-4 h-4 ml-1 cursor-pointer" />
                        </Link>
                    )}

            </div>
        </header>
    );
}
