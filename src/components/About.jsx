import React from "react";
import { motion } from "framer-motion";

import { style } from "../style";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const About = () => {
    return (
      <>
        <motion.div>
          <p className={style.sectionSubText}>Introduction</p>
          <h2 className={style.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a problem solver who enjoys connecting with people from all walks of
          life. Currently, I'm a student at the University of Missouri-Columbia,
          where I'm studying Computer Science, Business, and Mathematics. I have a
          keen interest in technology, especially topics like machine learning and
          artificial intelligence. Looking ahead, I'm excited about the prospect
          of pursuing a career in software engineering. Beyond my academic and
          career goals, I have a range of interests that keep me engaged. Staying
          active is important to me, and I find joy in working out and playing
          tennis. Reading is another passion of mine, and I'm always eager to
          explore new books across different genres. Recently, I've discovered a
          new passion... investing. I'm enthusiastic about exploring the world of
          finance and understanding how markets work. It's an exciting journey,
          and I'm eager to learn more and explore new investment opportunities.
        </motion.p>
      </>
    );
  };

export default SectionWrapper(About, "about");
