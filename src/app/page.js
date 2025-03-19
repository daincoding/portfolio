"use client";

import { useState } from "react";
import About from "@/components/about/About";
import Navbar from "@/components/sidebar/Navbar";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";


export default function Home() {

  const [activePage, setActivePage] = useState("About");

  return (
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        {activePage === "About" && <About />}
        {activePage === "Resume" && <Resume />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Contact" && <Contact />}
      </div>
  );
}
