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
  {    name: "AWS",
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
    title: "ATC Solutions Developer",
    company_name: "World Wide Technology | Internship",
    icon: meta,
    iconBg: "#FFFFFF",
    date: "May 2024 - Present",
    points: [
      "Developed a Dell EMC Data Domain Lab guide for CommVault using detailed API documentation and virtual server sandboxes, enabling 100+ employees to navigate setup intricacies for client projects, enhancing technical and project efficiency.",
      "Published articles on BOPLA, leveraging RESTful APIs and best practices to help understanding and technical expertise for employees",
      "Proposed a solution to the integration of AWS with Rubrik RSC to improve upon backup and recovery on an enterprise level.",
      "Automated certificate email distribution for users boosting operational efficiency by 50% using Ansible Notebook.",
      "Used Python to automate documentation through GitHub Pages for a development Instruqt toolkit.",
      "Integrated CICD pipelines, managed pull requests, conducted code reviews, performed load/stress/unit/integration testing."
    ],
  },
  {
    title: "HPC Research",
    company_name: "University of Missouri, Columbia",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "Dec 2023 - May 2024",
    points: [
      "Developed containerized deployments of MonoDepth2 for local environments and integration with Jupyter notebooks.",
      "Implemented Docker and Kubernetes solutions for scalable and efficient deployment of deep learning models.",
      "Utilized AWS services like EC2, S3, and Lambda, to design and manage cloud-based infrastructure and deployment strategies.",
      "Deployed multiple full-stack web projects using containers and AWS, leveraging services such as ECS and RDS.",
    ],
  },
  {
    title: "Tennis Coach",
    company_name: "A1 Tennis | Entrepreneur",
    icon: shopify,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Established a tennis clinic that caters towards participants from children to young adults.",
      "Implemented a diverse range of teaching approaches in group and private lessons, priortizing the fundamental techniques.",
      "Maintained excellent client/parental relationships over the years, creating a positive and enjoyable environment for everyone.",
      "A key factor in developing AI/ML project on tennis analysis to further advance skill levels.",
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
    name: "Portfolio",
    description:
      "This Page! A personal website of mine to showcase my accomplishments. Built with a JavaScript foundation, I utilize Framer Motion for a smooth animated experience, Three.js for interactive 3D elements and React Three Fiber all of which is deployed on AWS cloud.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/nmc-cs/Portfolio",
  },
  {
    name: "Pac-Man",
    description:
      "A group Pacman simulation game featuring all the same features of the original game but with our own fun, unique integration of sounds and gameplay. Follows all OOP principles and design patterns such as Singleton and Factory.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nmc-cs/Pac-Man",
  },
];

export { services, technologies, experiences, testimonials, projects };
