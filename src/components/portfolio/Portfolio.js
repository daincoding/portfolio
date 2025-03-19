"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

// Project Data with Unique Links, Buzzwords & Descriptions
const projects = [
  { 
    id: 1, 
    title: "Finance", 
    category: "web development", 
    image: "/assets/images/project-1.jpg", 
    link: "https://finance.example.com",
    buzzwords: ["React", "Tailwind", "API"],
    description: "A modern finance management platform with seamless API integration."
  },
  { 
    id: 2, 
    title: "Orizon", 
    category: "web development", 
    image: "/assets/images/project-2.png", 
    link: "https://orizon.example.com",
    buzzwords: ["Next.js", "GraphQL", "Serverless"],
    description: "An innovative project management tool leveraging GraphQL for real-time data."
  },
  { 
    id: 3, 
    title: "Fundo", 
    category: "web design", 
    image: "/assets/images/project-3.jpg", 
    link: "https://fundo.example.com",
    buzzwords: ["Figma", "CSS", "Animations"],
    description: "A sleek, animated landing page designed with Figma and CSS."
  },
  { 
    id: 4, 
    title: "Brawlhalla", 
    category: "applications", 
    image: "/assets/images/project-4.png", 
    link: "https://brawlhalla.example.com",
    buzzwords: ["Game Dev", "Unity", "C#"],
    description: "A competitive online fighting game built with Unity and C#."
  },
  { 
    id: 5, 
    title: "DSM.", 
    category: "web design", 
    image: "/assets/images/project-5.png", 
    link: "https://dsm.example.com",
    buzzwords: ["Branding", "Typography", "UX/UI"],
    description: "A digital style guide for modern branding and typography."
  },
  { 
    id: 6, 
    title: "MetaSpark", 
    category: "web design", 
    image: "/assets/images/project-6.png", 
    link: "https://metaspark.example.com",
    buzzwords: ["Marketing", "SEO", "Analytics"],
    description: "A comprehensive SEO and marketing dashboard with real-time analytics."
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
          {["all", "web design", "applications", "web development"].map((category) => (
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