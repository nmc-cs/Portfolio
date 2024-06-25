import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Infrastructure",
    icon: web,
  },
  {
    title: "Data & AI",
    icon: mobile,
  },
  {
    title: "Linux Systems",
    icon: backend,
  },
  {
    title: "Docker & Kubernetes",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "C",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: figma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "kubernetes",
    icon: typescript,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tennis Coach",
    company_name: "A1 Tennis",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Established a tennis clinic that caters towards participants from children to young adults.",
      "Implemented a diverse range of teaching approaches in group and private lessons, priortizing the fundamental techniques.",
      "Maintained excellent client/parental relationships over the years, creating a positive and enjoyable environment for everyone.",
      "A key factor in developing AI/ML project on tennis analysis to further advance skill levels.",
    ],
  },
  {
    title: "Software Engineering Job Simulation",
    company_name: "J.P.Morgan Chase x Forage",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sep 2023",
    points: [
      "Established a local dev environment by creating and identifiying essential files, tools and dependencies.",
      "Analyzed and fixed broken files in repository resulting in a fully functional web application providing accurate output.",
      "Utilized JPMorgan Chase's open-source library, Perspective, to create a live graph to enhance user experience.",
      "Implemented the live graph to display real-time feeds catered towards traders for potential opportunities.",
    ],
  },
  {
    title: "ATC Solutions Development Intern",
    company_name: "World Wide Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "NF",
      "NF",
      "NF",
      "NF",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tennis Analyzer",
    description:
      "An AI/ML video analyzer that can accurately track players and ball while projecting a mini map version of the game that displays shot speed, player speed and their averages by using court keypoints. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "numpy/pandas",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/nmc-cs/Tennis-Analyzer",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
