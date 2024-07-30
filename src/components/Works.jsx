import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import StartCanvas from "./canvas/Stars";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const isVideo = image.endsWith(".mp4");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          {isVideo ? (
            <video
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>My Work</p>
        <h2 className={style.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My coding projects are crafted to solve real-world challenges and enhance my technical expertise.
          Each project is designed to address a specific problem in my life, understand new technologies,
          or work with others to better my collaborative skills. While I don't have all my projects listed here,
          feel free to browse through my repositories on GitHub to see a wide range of solutions. I'm always open to discussions,
          questions, and collaboration opportunities. If you find something intriguing or have and cool idea, don't
          hesitate to reach out!

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
