import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FCRImg from "../../public/fcr.png";
import TDAImg from "../../public/tda.png";
import ERPImg from "../../public/erp.png";
import MSCImg from "../../public/msc.png";

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
    title: "Developer Consultant",
    location: "PT Phoenix Solusi Indonesia",
    description:
      "Full time at the telematics provider company. Working with Fleet Management Systems and build supporting apps.",
    icon: React.createElement(CgWorkAlt),
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
    location:
      "Direktorat Pengembangan Teknologi dan Sistem Informasi (DPTSI) - ITS",
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
      "My final thesis which is to create a fully fledged attendance system using facial recognition. Includes a backend, Android, and camera app.",
    fullDescription:
      "My final thesis project involved developing an attendance system using facial recognition technology. The system consisted of a backend server (Express.js), an Android app to submit the student's facial data, and a dedicated camera app put inside classes/ labs for processing and verifying attendance (Python). I made the backend and camera app, while a colleague of mine made the Android app for his thesis.\n\nThe faces that are captured by the camera app are stored, for then to be processed again with other open-source face recognition models to verify their claimed accuracy. Though it seems qualitative, my thesis is actually quantitative as I focus on evaluating the accuracy of these open-source models using the data received from this face recognition attendance system. I used FaceNet512 from the DeepFace Python library as my primary model and it proved to have the highest accuracy among available models.",
    tags: ["Python", "Express.js", "JavaScript", "MySQL"],
    imageUrl: FCRImg,
    images: [],
    date: "Aug 2023 - Aug 2024",
    team: "Duo with Colleague",
  },
  {
    title: "Rugged Tablet Demo App",
    description:
      "Created a demo app to test a Fleet Management Kit and showcase a rugged tablet' support for docking station communication protocols.",
    fullDescription:
      "A demo app is made to display the features of the Neway N777A Rugged Tablet to showcase it's capabilities to customers and investors. As the company I work for deals in fleet management and visibility, the tablet is repurposed to receive data from the vehicle and send it to a Fleet Management System called Wialon. To help with visibility, the company also provides sensors to be put on vehicles.\n\nThe tablet sends data to a Wialon server through WiaTagKit, a library made by the company itself using it's own binary protocol. The data sent includes GPS coordinates (Lat, Long, Alt), Speed, Bearing, NFC data, and numerous low-current inputs such as analogs, GPIO, RS232, and RS485 via docking station. USB and CAN protocols can be used to read vehicle data. Distance and pressure sensors could also be connected through the inputs. It was fun reverse engineering the source code by the Chinese manufacturers to create this whole app.",
    tags: ["Kotlin", "Android", "Embedded Systems"],
    imageUrl: TDAImg,
    images: [],
    date: "Dec 2023 - Feb 2024",
    team: "PT Phoenix Solusi Indonesia",
  },
  {
    title: "myITS StudentConnect",
    description:
      "Made a student extracurricular credit manager. Merged it with an already existing in-campus organization tracking service.",
    fullDescription:
      "In an attempt to modernize and standardize legacy campus websites, DPTSI decided to migrate services into myITS, the uni's central portal using newer tech stacks. One of those legacy website is SIM ORMAWA that helps student and campus admins to manage what organizations there is in campus. A newer StudentConnect also exists in myITS, a module that helps student input their organization activities in exchange for credits. Since both serve the same users and have similar use cases, it's decided to merge SIM ORMAWA into StudentConnect to streamline processes.\n\nI helped create the frontend components needed to be transfered from SIM ORMAWA to StudentConnect using Next.js. The process was one of the first times I get to work in a huge team with proper scrum management and also having to speak with users directly. It was exhilirating when I got to see what I made had been deployed and used by thousands of students in ITS.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Golang"],
    imageUrl: MSCImg,
    images: [],
    date: "Sep 2023 - Dec 2023",
    team: "Direktorat Pengembangan Teknologi dan Sistem Informasi (DPTSI) - ITS",
  },
  {
    title: "ERP (Forecasting Module)",
    description:
      "Worked as a full-stack developer on this project. Users can instantly make demand forecasts based on their inventory.",
    fullDescription:
      "A professor in my department had a project with Chemical Engineering to create an ERP for their sorghum plant. They decided to employ some of the students to help him do it, with students having to do research and implement each of their own module (Accounting, HR, Inventory, etc). We do extensive research with users, other ERP systems, and faculty members.\n\nI personally work closely with my colleague that handles Inventory, as my task was to predict future inventory. I did extensive research on time series forecasting models such as ARIMA, Holt-Winters, LSTM, etc. Yet we found that predicting inventory is very case-by-case and needs proper data quality and tuning to make it work, leading to the forecasting module to be discontinued. It's a shame as it's an interesting project to have ML in an ERP, but I learned a lot of things throughout so I'm very grateful of having the opportunity to be part of it.",
    tags: ["Next.js", "Express.js", "MySQL", "Python"],
    imageUrl: ERPImg,
    images: [],
    date: "Jan 2023 - Jul 2023",
    team: "Team led by Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D.",
  },
] as const;

export type SkillCategory =
  | "Programming Languages"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Machine Learning/AI"
  | "Embedded/IoT"
  | "DevOps/Tools"
  | "Project Management";

export interface Skill {
  name: string;
  category: SkillCategory;
}

// I understand the categorizing is attrocious but it's style over substance this time
export const skillsData: readonly Skill[] = [
  // Programming Languages
  { name: "TypeScript", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },

  // Mobile
  { name: "Java", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },

  // Backend
  { name: "Golang", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },

  // Database
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },

  // Machine Learning/AI
  { name: "Python", category: "Machine Learning/AI" },
  { name: "Tensorflow", category: "Machine Learning/AI" },

  // Embedded/IoT
  { name: "C/ C++", category: "Programming Languages" },
  { name: "Arduino", category: "Embedded/IoT" },
  { name: "Embedded Systems", category: "Embedded/IoT" },

  // DevOps/Tools
  { name: "Docker", category: "DevOps/Tools" },
  { name: "Bash / Shell Scripting", category: "DevOps/Tools" },

  // Project Management
  { name: "Agile Methods (Scrum)", category: "Project Management" },
  { name: "Project Management (JIRA, Trello)", category: "Project Management" },
] as const;
