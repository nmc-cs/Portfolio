import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

import { style } from "../style";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-24">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-24">
        <li>Marquette Senior High School</li>
        <li>University of Missouri, Columbia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-24">
        <li>AWS Cloud Practitioner</li>
        <li>Coming Soon</li>
        <li>Coming Soon</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:col-span-1">
          <motion.div>
            <p className={style.sectionSubText}>Introduction</p>
            <h2 className={style.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a problem solver who enjoys connecting with people from all walks of
            life. Currently, I'm a student at the University of Missouri-Columbia,
            where I'm studying Computer Science, Business, and Mathematics. I have a
            keen interest in technology, especially topics like machine learning and
            artificial intelligence. Looking ahead, I'm excited about the prospect of
            pursuing a career in software engineering. Beyond my academic and career
            goals, I have a range of interests that keep me engaged. Staying active is
            important to me, and I find joy in working out and playing tennis. Reading
            is another passion of mine, and I'm always eager to explore new books across
            different genres. Recently, I've discovered a new passion... investing. I'm
            enthusiastic about exploring the world of finance and understanding how
            markets work. It's an exciting journey, and I'm eager to learn more and
            explore new investment opportunities.
          </motion.p>
        </div>
        <div className="md:col-span-1 flex flex-col justify-start mt-8 md:mt-0 md:pl-16">
          <motion.div className="flex flex-row justify-start md:justify-center mt-32" variants={fadeIn("", "", 0.1, 1)}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </motion.div>
          <motion.div className="mt-5" variants={fadeIn("", "", 0.2, 1)}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
