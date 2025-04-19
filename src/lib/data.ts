import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa6";
import FCRImg from "../../public/FCR.jpg";
import ERPImg from "../../public/ERP.jpg";
import MSCImg from "../../public/MSC.jpg";

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
    title: "Analyst Developer",
    location: "PT Phoenix Solusi Indonesia",
    description:
      "Full time at the telematics provider company. Worked with GPS systems, such as Wialon and Flespi, and maintain it for clients",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2024 - Now",
  },
  {
    title: "Computer Science Graduate",
    location: "Sepuluh Nopember Institute of Technology",
    description:
      "Graduated cum laude with a 3.67 GPA. Final thesis is a Facial Recognition Attendance System.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2020 - Aug 2024",
  },
  {
    title: "Junior Software Developer",
    location: "PT Bispro Consulting",
    description:
      "Hybrid contract for 3 months at the consulting firm. Worked with M-Files, a document management platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Feb 2024",
  },
  {
    title: "Frontend Developer",
    location: "Direktorat Pengembangan Teknologi dan Sistem Informasi (DPTSI) - ITS",
    description:
      "On-site contract for 4 months as a Frontend Developer. Worked on myITS StudentConnect.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 - Dec 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Face Recognition Attendance System",
    description:
      "My final thesis which is to create an attendance system using facial recognition. Includes a backend, Android, and camera app.",
    tags: ["Python", "Express.js", "JavaScript", "MySQL"],
    imageUrl: FCRImg,
  },
  {
    title: "myITS StudentConnect",
    description:
      "Made a student extracurricular credit manager. Merged it with an already existing in-campus organization tracking service.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Golang"],
    imageUrl: MSCImg,
  },
  {
    title: "ERP (Forecasting Module)",
    description:
      "Worked as a full-stack developer on this project. Users can instantly make demand forecasts based on their inventory.",
    tags: ["Next.js", "Express.js", "MySQL", "Python"],
    imageUrl: ERPImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "PHP",
  "JavaScript",
  "Kotlin",
  "SQL",
  "Bash/ Shell Scripting",
  "Python",
  "Laravel",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Android Studio",
  "Agile Methods (Scrum)",
  "Project Management (JIRA, Trello)",
  "Tensorflow",
] as const;