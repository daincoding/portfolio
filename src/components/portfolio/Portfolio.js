"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

// Project Data with Unique Links, Buzzwords & Descriptions
const projects = [
  { 
    id: 1, 
    title: "Hitless Stats - (WIP GitHub Only)", 
    category: "Web Development", 
    image: "/assets/Port_P1.png", 
    link: "https://github.com/daincoding/hitless-stats",
    buzzwords: ["React", "Tailwind", "API", "MySQL", "User Management", "Framer Motion"],
    description: "A FullStack Project with Admin Area and User Management for Team Hitless Community Member to track their challenge runs and showcase statistics!"
  },
  { 
    id: 2, 
    title: "Bounty Pub", 
    category: "Web Development", 
    image: "/assets/Port_09.png", 
    link: "https://bountypub.club/",
    buzzwords: ["React", "Tailwind", "Vite", "Framer Motion", "API"],
    description: "A Website for the BountyPub Community on Discord. Its a website that shows the current Bounty Events and the Leaderboards. It gets all the Data purly of Google Sheets."
  },
  { 
    id: 3, 
    title: "Portfolio Website", 
    category: "Web Development", 
    image: "/assets/Port_P2.png", 
    link: "https://panske.dev",
    buzzwords: ["Next.js", "JS", "CSS"],
    description: "Personal Portfolio Website about my work!"
  },
  { 
    id: 4, 
    title: "Hitless Guides - Sceleton Project", 
    category: "Web Development", 
    image: "/assets/Port_P3.png", 
    link: "https://hitlessguides.vercel.app/",
    buzzwords: ["Figma", "Chakra UI", "TypeScript"],
    description: "Hitless Guides was one of my first projects as a OnePager for the Team Hitless Community. You can search for Guides on specific Games. Its fully functional, just missing the content."
  },
  { 
    id: 5, 
    title: "Music Portfolio", 
    category: "Web Development", 
    image: "/assets/Port_P4.png", 
    link: "https://dainsounds.netlify.app/",
    buzzwords: ["HTML", "CSS"],
    description: "A Music Portfolio website purely out of HTML and CSS. It was one of my starting Projects that I gonna rebuild in the future."
  },
  { 
    id: 6, 
    title: "Coreborn", 
    category: "Game Development", 
    image: "/assets/Port_P5.png", 
    link: "https://store.steampowered.com/app/1926090/Coreborn/",
    buzzwords: ["Sound Production", "Community Support", "UX/UI"],
    description: "Created whole Soundscape of a multiplayer Game project and smaller games (OST,SFX,Atmo, Mix&Master)."
  },
  { 
    id: 7, 
    title: "dain.", 
    category: "Music Production", 
    image: "/assets/Port_P6.png", 
    link: "https://open.spotify.com/artist/0WGxgRurCUtZPILs08KznX?si=6utY-W1TTUq4PUvZhMsPQg",
    buzzwords: ["Music Production", "Ableton", "Marketing"],
    description: "Main Artist Name for LoFi and Synthwave"
  },
  { 
    id: 8, 
    title: "Toyou", 
    category: "Music Production", 
    image: "/assets/Port_P7.png", 
    link: "https://open.spotify.com/artist/3dNmdZN1skt8fVuLMDECwl?si=bjScHszvSGWFZ1nKseROnw",
    buzzwords: ["Music Production", "Ableton", "Marketing"],
    description: "Toyou is the alias for Club Music."
  },
  { 
    id: 9, 
    title: "90 Miles", 
    category: "Music Production", 
    image: "/assets/Port_P8.png", 
    link: "https://open.spotify.com/artist/1PclBjYMDv5llwo1JmTooN?si=qk773ZtWTGy_SLH04fWLAA",
    buzzwords: ["Music Production", "Ableton", "Marketing"],
    description: "Duo Projects - won multiple Remix contests. Funky House is the main genre."
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter Projects Based on Selected Category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter Buttons */}
      <section className="projects">
        <ul className="filter-list">
          {["all", "Web Development", "Game Development", "Music Production"].map((category) => (
            <li key={category} className="filter-item">
              <button
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Filtered Project List */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active" data-category={project.category}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaEye />
                  </div>
                  <Image src={project.image} alt={project.title} width={400} height={300} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                {/* Buzzword Badges */}
                <div className="badges">
                  {project.buzzwords.map((word, index) => (
                    <span key={index} className="badge">{word}</span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;