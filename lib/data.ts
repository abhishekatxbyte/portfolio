import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiBmcsoftware } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BiLogoReact } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";




import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Government Engineering College Modasa",
    location: "Modasa, India",
    description:
      "Earned a Bachelor's degree in Computer Engineering.",
    date: "Aug 2019 - Mar 2023",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "Began my career during the COVID-19 pandemic, working as a freelance web developer at Dev Engineering. Specialized in developing websites for chemical and hydro valve companies.",
    icon: React.createElement(SiBmcsoftware),

    date: "jan 2022 - may 2022",
  },
  {
    title: "Junior React Developer at ImpactOverse",
    location: "Remote(london)",
    description:
      "Contributed to the development of ImpactOverse's NFT marketplace and homepage, with a focus on combining NFT sales with charitable donations to NGOs.",
    date: "May 2022 - Dec 2022",

    icon: React.createElement(CgWebsite),

  },
  {
    title: "Junior React Developer at Simform Solutions",
    location: "Ahmedabad, India",
    description:
      "Gained valuable corporate experience at Simform Solutions, an AWS-associated MNC. Worked as a Junior React Developer.",
    date: "Feb 2023 - Aug 2023",
    icon: React.createElement(BiLogoReact),

  },
  {
    title: "React Developer at X-Byte",
    location: "Ahmedabad, India",
    description:
      "Currently employed as a React Developer at X-Byte since Aug 2023. Contributing to web development projects.",
    date: "Aug 2023 - Present",
    icon: React.createElement(BiLogoReact),

  },
] as const;


export const projectsData = [
  {
    title: "afvclub",
    description:
      "afvclub is the site for booking luxurious resorts. I was the Jr.front-end developer. It has features like filtering, sorting and pagination.it is luxurious version of airbnb ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind",],
    imageUrl: corpcommentImg,
    link: 'https://www.afvclub.com/search-resorts/resort/4438',
    icon: React.createElement(AiOutlineLink),
  },
  {
    title: "decrypt",
    description:
      "decrypt is platform provided to serve the need of pillers of society that build the economy of socity, I am very greatfull to be part of the team",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: 'https://decrypt.co/',
    icon: React.createElement(AiOutlineLink),
  },
  {
    title: "Impactoverse",
    description:
      "Web 3 adapted early company that is invest in makeing word better place. I was the Front-end developer In the team.  ",
    tags: ["React", "MongoDB", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    icon: React.createElement(AiOutlineLink),
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
  "Gsap",
  "blender",
  "headless ui"
] as const;
