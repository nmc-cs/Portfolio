import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { style } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const formatDate = () => {
    const now = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    setCurrentDate(formatDate());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${style.paddingX} w-full flex items-center py-5 fixed top-0 left-0 right-0 z-20
        transition-all duration-300
        ${scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 pl-[50px]"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nitin M. Chava &nbsp;
            <span className="sm:block hidden"></span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-white"
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href={`#${link.id}`}
                className="relative"
                initial={{ color: "#FFFFFF" }}
                whileHover={{ color: "#BA3B2A" }}
                transition={{ duration: 0.3 }}
              >
                {link.title}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#BA3B2A]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.a
                    href={`#${link.id}`}
                    initial={{ color: "#FFFFFF" }}
                    whileHover={{ color: "#BA3B2A" }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.title}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
