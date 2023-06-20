import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import Resume from "../assets/RESUME 2023.pdf";

const Navbar = () => {
  const [nav, setNAv] = useState(false);
  const handleClick = () => setNAv(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <a href="/">
        <div className>
          <img src={Logo} alt="Logo" style={{ width: "150px" }}></img>
        </div>
      </a>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            HOME
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="skills" smooth={true} duration={500}>
            SKILLS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="work" smooth={true} duration={500}>
            WORK
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            CONTACT
          </ScrollLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center"
        }
      >
        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            HOME
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            ABOUT
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            WORK
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            CONTACT
          </ScrollLink>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300s bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/marian-primak-7ab776121/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300s bg-black-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Knochen01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300s bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300s bg-[#565f69]">
            <span className="flex justify-between items-center w-full text-gray-300">
              <ScrollLink to="contact" smooth={true} duration={500}>
                Email
              </ScrollLink>
              <HiOutlineMail size={30} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
