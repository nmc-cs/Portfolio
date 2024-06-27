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
      <ul className="grid grid-cols-2 gap-4 text-[15px]">
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>C/C++</li>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>Python</li>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>JS/React</li>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>Java</li>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>Docker/K8s</li>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>AWS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4 text-[15px]">
        <li className="flex flex-col">
          <span className="font-semibold">Marquette Senior High School</span>
          <span className="text-[#BA3B2A]">High School Diploma | 2019 - 2022</span>
        </li>
        <li className="flex flex-col">
          <span className="font-semibold">University of Missouri, Columbia</span>
          <span className="text-[#BA3B2A]">BS in Computer Science, Certificate in Cyber Security | 2022 - 2025</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-4 text-[15px]">
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>AWS Cloud Practitioner</li>
        <span className="text-[#BA3B2A] ml-4">2023 - 2026</span>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>J.P. Morgan - SWE Job Simulation</li>
        <span className="text-[#BA3B2A] ml-4">2023</span>
        <li className="flex items-center"><span className="mr-2 text-[#BA3B2A]">▹</span>Coming Soon</li>
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
            I was born in India and came to United States at the age of four and have been in St. Louis, MO since.
            I am currently a Junior studying Computer Science at The University of Missouri, Columbia.
            I consider myself as a leader, problem-solver, and a learner who is dedicated to seek out opportunities
            that make an impact on our world. Thats enough of the cliche message. Apart from academics, I play tennis
            on the club team at Mizzou, I love adventure, cooking, and reading.
          </motion.p>
        </div>
        <div className="md:col-span-1 flex flex-col justify-start mt-8 md:mt-0 md:pl-16">
          <motion.div className="flex flex-row justify-start md:justify-center mt-32" variants={fadeIn("", "", 0.1, 1)}>
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </motion.div>
          <motion.div className="mt-8 bg-[#241f3771] p-6 rounded-lg" variants={fadeIn("", "", 0.2, 1)}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
