import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaDownload } from "react-icons/fa";

import { style } from "../style/";
import { ComputersCanvas } from "./canvas";
import StarsCanvas from "./StarBackground";
import "../index.css";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Software Developer", "Sales Engineer", "Consultant"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${style.paddingX} absolute inset-0 top-[105px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#BA3B2A]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#BA3B2A]">Nitin</span>
          </h1>
          <p
            className={`${style.heroSubText} mt-2 text-white-100`}
            style={{ marginTop: "15px" }}
          >
            an aspiring <br className="sm:block hidden" />
            <span className="text-[#BA3B2A]">
              <motion.span
                key={roles[currentIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentIndex]}
              </motion.span>
            </span>
          </p>
          <div className="social-icons-container" style={{ marginTop: "30px" }}>
            <a
              href="https://www.linkedin.com/in/nmc03/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onClick={() => console.log("LinkedIn clicked")}
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/nmc-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/nithin.chava/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://x.com/NMadvC"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={28} />
            </a>
          </div>
          <div className="download-cv-container" style={{ marginTop: '30px' }}>
            <a
              //href="https://drive.google.com/uc?export=download&id=1JoPLy_Vl9woRwT3G08YTSLz_z6Eimi6P"
              href="https://drive.google.com/file/d/1m8C6ToLF0FP5KrB8PK0pFIOoswkbpxyu/view"
              target="_blank"
              download="Nitin_Chava_CV.pdf"
              rel="noopener noreferrer"
              className="download-cv-button"
          >
              <FaDownload size={20} style={{ marginRight: '8px' }} />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <StarsCanvas />
      <ComputerCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#BA3B2A] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
