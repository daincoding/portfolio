"use client";

import { FaChevronDown, FaGithub } from "react-icons/fa";
import { FaBluesky, FaDiscord, FaSpotify } from "react-icons/fa6";
import { CiMail, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { useState } from "react";

const Sidebar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    console.log("Sidebar state:", !isSidebarOpen);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/Avatar.png" alt="Richard Hanrick" width={80} className="avatar-box"/>
        </figure>

        <div className="info-content">
          <h1 className="name">Alexander Panske</h1>
          <p className="title">Web Developer</p>
        </div>

        <button onClick={toggleSidebar} className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <FaChevronDown />
        </button>
      </div>

      {/* Sidebar Details - Always Exists, But Shown/Hidden */}
      <div className={`sidebar-info-more ${isSidebarOpen ? "active" : ""}`}>
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
                <CiMail className="icon"/>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">alexander.panske@yahoo.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
                <VscGithubAlt className="icon"/>
            </div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href="https://github.com/daincoding" className="contact-link">daincoding</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
                <CiLinkedin className="icon"/>
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/alexpanske/" className="contact-link">Alexander Panske</a>
            </div>
          </li>
          <li className="contact-item">
          <div className="icon-box">
                <CiLocationOn className="icon"/>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Hanover, Lower Saxony, Germany 🇩🇪</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://github.com/daincoding" className="social-link">
              <FaGithub name="logo-github"></FaGithub>
            </a>
          </li>

          <li className="social-item">
            <a href="https://bsky.app/profile/dainsounds.nohit.club" className="social-link">
            <FaBluesky name="logo-bluesky"></FaBluesky>
            </a>
          </li>

          <li className="social-item">
            <a href="https://discordapp.com/users/246708539182022656" className="social-link">
            <FaDiscord name="logo-discord"></FaDiscord>
            </a>
          </li>

          <li className="social-item">
            <a href="https://open.spotify.com/artist/0WGxgRurCUtZPILs08KznX?si=r5xMkFnSS2a9Uz3ABzpiwQ" className="social-link">
            <FaSpotify name="logo-spotify"></FaSpotify>
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;