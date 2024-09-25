import {
  FaCss3,
  FaEnvelope,
  FaFigma,
  FaHtml5,
  FaJs,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiCoreldraw,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

// services page
export const services = [
  {
    num: 1,
    name: "Web Development",
    path: "",
    desc: `Creating user interfaces for applications and websites, focusing on the visual elements and interactivity that users see. Using technologies such as HTML, CSS, and JavaScript, responsible for designing attractive layouts, ensuring responsiveness across devices, and enhancing the user experience through seamless interactions.    
    In addition, we often work with modern frameworks such as React or Next.js to build dynamic and efficient applications. The goal is to combine aesthetics and functionality so that users can navigate the site comfortably and intuitively`,
  },

  {
    num: 2,
    name: "Logo Design",
    path: "",
    desc: "Logo design is a creative process that aims to create a unique and recognizable visual identity for a brand or company. A logo serves as a symbolic representation of the brand's values, vision, and mission. In logo design, elements such as shape, color, and typography are carefully selected to create a strong and eye-catching impression. Logo designers must understand the target audience and industry trends to produce a logo that is not only aesthetic, but also relevant and effective in building a consistent brand image. ",
  },
  {
    num: 3,
    name: "Product Design",
    path: "",
    desc: "offers creative solutions to help brands create attractive and functional products. With a collaborative approach, we understand the needs of clients and target audiences, from research to concept development.",
  },
];

// Resume Page
export const about = {
  title: "About me",
  description: `Hi i'm Ghani Fauzan, a front-end web developer who is passionate about creating amazing digital experiences especially in design and websites. I have a deep interest in how technology can change the way we interact with the world. 
    Outside of web development, I enjoy reading comics, playing games, and sometimes playing badminton.`,
  info: [
    {
      fieldName: "Full Name",
      fieldValue: "Abdul Ghani Fauzan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62)81 219 477 181",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },
    {
      fieldName: "Email",
      fieldValue: "ghani.fauzan11@gmail.com",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@ghanfa_",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "languages",
      fieldValue: "Indonesia, Sundanese, English",
    },
  ],
};

export const Experiences = {
  icon: "",
  title: "My Experiences",
  description: "So far I have experience in working in the following areas:",
  items: [
    {
      company: "Jakarta Repair Sofa",
      position: "Manager",
      duration: "2022 - Present",
    },
    {
      company: "Digital Agency",
      position: "Frontend   Developer & Logo Designer",
      duration: "2021 - 2022",
    },
    {
      company: "Islamic boarding school foundation",
      position: "IT staff",
      duration: "2019 - 2021",
    },
  ],
};

export const education = {
  title: "Education",
  description: `I have a background in Information Technology. During my college years, I learned the basics of how to develop websites, desktop applications, and mobile applications. Until finally I decided to focus more on the website field. 
    In addition, I attended several courses and bootcamps related to web development, where I learned about frameworks and technologies used in the professional field. I am always eager to learn and develop myself in the field of technology.`,
  items: [
    {
      school: "Binar Academy Bootcamp",
      degree: "Front End Engineer",
      duration: "2023 - 2024",
    },

    {
      school: "Online course",
      degree: "Programming course",
      duration: "2021-2022",
    },
    {
      school: "Pamulang University",
      degree: "Bachelor Degree",
      duration: "2016 - 2021",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "During my activities in developing websites, I have become familiar with the following technologies:",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "React.Js",
      icon: <FaReact />,
    },
    {
      name: "Next.Js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "CorelDraw",
      icon: <SiCoreldraw />,
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
    },
  ],
};

// Projects Page
export const projects = [
  {
    num: "01",
    name: "Project 1",
    category: "Landing Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus?",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/projects/project1.png",
    live: "https://kopi-kenangan-five.vercel.app/",
    github: "https://github.com/GhanFa/Kopi-Kenangan",
  },
  {
    num: "02",
    name: "Project 2",
    category: "Frontend",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus?",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "React.Js" },
      { name: "Node.Js" },
    ],
    image: "/assets/projects/project2.png",
    live: "https://rent-car-one-omega.vercel.app/",
    github: "https://github.com/GhanFa/fer-rental-mobil-public",
  },
  {
    num: "03",
    name: "Project 3",
    category: "Frontend",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus?",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind.CSS" },
      { name: "Javascript" },
      { name: "React.Js" },
      { name: "Node.Js" },
    ],
    image: "",
    live: "",
    github: "",
  },
];

// Contact Page
export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "(+62)81 219 477 181",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "ghani.fauzan11@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Garut, West Java, Indonesia",
  },
];
