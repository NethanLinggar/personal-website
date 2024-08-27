import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa6";
import FCRImg from "public/FCR.jpg";
import ERPImg from "public/ERP.png";
import MSCImg from "public/MSC.png";

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
] as const;

export const experiencesData = [
  {
    title: "Graduated from College",
    location: "Sepuluh Nopember Institute of Technology",
    description:
      "I graduated cum laude after 4 years of studying Computer Science with a 3.67 GPA. Final thesis is a Facial Recognition Attendance System.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Junior Software Developer",
    location: "PT Bispro Consulting",
    description:
      "Hybrid contract for 3 months as a Junior Software Developer. Worked with M-Files, a document management platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Feb 2024",
  },
  {
    title: "Frontend Developer",
    location: "Directorate of Technology and Information Systems Development",
    description:
      "On-site contract for 4 months as a Frontend Developer. Worked on myITS StudentConnect.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 - Dec 2023",
  },
  {
    title: "Teaching Factory Sustainable Talent Nurturing Program",
    location: "Digital Business and Technology Telkom Indonesia",
    description:
      "Online independent study program for 4 months, took the Software Architecture course.",
    icon: React.createElement(FaLaptop),
    date: "Sep 2023 - Dec 2023",
  },
  {
    title: "Forecasting for an Enterprise Resource Planning (ERP)",
    location: "Information Intelligent Management Laboratory ",
    description:
      "Developed an inventory forecasting module integrated with an ERP solution utilizing machine learning. Team lead by Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D.",
    icon: React.createElement(FaLaptop),
    date: "Jan 2023 - Jul 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Face Recognition Attendance System",
    description:
    "My final thesis which is to create an attendance system using facial recognition. Includes a backend, Android, and camera app.",
    tags: [ "Python", "Express.js", "JavaScript", "MySQL"],
    imageUrl: FCRImg,
  },
  {
    title: "myITS StudentConnect",
    description:
    "Implemented and deployed a service that manages student extracurricular credit. Merged it's logic with an existing in-campus organization tracking service.",
    tags: [ "Next.js", "Tailwind", "TypeScript", "Golang"],
    imageUrl: MSCImg,
  },
  {
    title: "ERP (Forecasting Module)",
    description:
      "Worked as a full-stack developer on this project. Users can instantly make demand forecasts based on their inventory.",
    tags: ["Next.js", "Express.js", "MySQL",  "Python"],
    imageUrl: ERPImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "JavaScript",
  "SQL",
  "Bash/ Shell Scripting",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Agile Methods (Scrum)",
  "Project Management (JIRA, Trello)",
  "Tensorflow",
] as const;