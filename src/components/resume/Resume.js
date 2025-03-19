"use client";

import { FaBookOpen } from "react-icons/fa6";

const educationData = [
  { title: "Certified Fullstack Dev. - DBE Academy", year: "2024 — 2025", text: "I’m learning all about web development using a variety of tools. The program emphasizes a hands-on approach, and I work on multiple side projects to deepen my understanding of each tool." },
  { title: "Bachelor of Arts Eventmanagement & Entertainment - FHM Hannover ", year: "2014 — 2017", text: "Got my Bachelor in Eventmanagement & Entertainment including Certificate for a Live Event organisation for the school." },
  { title: "Abitur - Klaus harms Schule Kappeln", year: "2005 — 2014", text: "Highest school education in Germany." }
];

const experienceData = [
  { title: "Freelancer Webdev & Sound Designer", year: "2020 — Present", text: "Since 2025, I have been working as a web developer, creating websites and web applications. My focus is on the technical implementation and the design of interactive experiences. With my background in music production and sound design, I can enhance projects not only visually but also acoustically. For several years, I have also been active in music production—both for my own projects and for clients. I specialize in custom commissions, particularly for streamers, providing high-quality sound alerts and tailor-made music. Additionally, I offer recording sessions and assist clients in bringing their creative ideas to life." },
  { title: "Sound Designer & Composer, Costumer Support - Blankhans GmbH", year: "2022 — 2024", text: "Took care of everything that has to do with Sound. Recording, creating and also implementation into the project using the Unreal Engine. Worked also on Mixing and Mastering everything for the multiplayer game Coreborn as well as some smaller projects in UEFN. Also took responsibility of Costumer Support as well as Community Support." },
  { title: "Store Manager - LIDL GmbH & Co. KG.", year: "2015 — 2022", text: "Worked on a local town store with a high intensity of costumers. Managed shifts on a day to day basis reaching the high quality goals. Started as a Job next to my studies." },
  { title: "Eventmanager (Internship) - Living Concerts GmbH", year: "2016 — 2016", text: "Learnd how to and managed concerts in the scale between 200 till 2500 people." }
];

const skillsData = {
  "Tech Stack": [
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 60 },
    { name: "Next.js", level: 55 },
    { name: "HTML", level: 95 },
    { name: "TypeScript", level: 45 },
    { name: "php", level: 25 },
    { name: "SQLite", level: 35 },
    { name: "MySQL", level: 35 },
    { name: "Unreal Engine", level: 65 },
    { name: "Docker", level: 30 },
    { name: "Node.js", level: 60 },
  ],
  "Design": [
    { name: "Figma", level: 50 },
    { name: "CSS", level: 90 },
    { name: "Tailwind", level: 70 },
    { name: "Bootstrap", level: 60 },
    { name: "Framer Motion", level: 70 },
    { name: "Chakra UI", level: 40 }
  ],
  "Project Management": [
    { name: "Jira", level: 85 },
    { name: "Git", level: 65 },
    { name: "Notion", level: 80 }
  ],
  "Sound & Motion Picture": [
    { name: "Ableton", level: 95 },
    { name: "Reaper", level: 60 },
    { name: "Logic", level: 70 },
    { name: "Audition", level: 70 },
    { name: "Affinity Suite", level: 40 },
    { name: "Photoshop", level: 40 },
    { name: "Premiere", level: 50 },
    { name: "DaVinci", level: 55 },
    { name: "After Effects", level: 50 },
    { name: "OBS", level: 95 }
  ]
};

const TimelineSection = ({ title, data }) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
      <FaBookOpen size={30} className="book-icon shimmer-gold" />
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className="timeline-list">
      {data.map((item, index) => (
        <li key={index} className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.year}</span>
          <p className="timeline-text">{item.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

const SkillsSection = ({ skills }) => (
  <section className="skill">
    <h3 className="h3 skills-title">Skills Overview</h3>

    {Object.entries(skills).map(([category, skillList], index) => (
      <div key={index}>
        <ul className="skills-list content-card">
        <h4 className="h4 category-title">{category}</h4>
          {skillList.map((skill, skillIndex) => (
            <li key={skillIndex} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
        {index < Object.keys(skills).length - 1 && <div className="separator"></div>}
      </div>
    ))}
  </section>
);

const Resume = () => {
  console.log("✅ Resume Component Rendered!");
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <TimelineSection title="Education" data={educationData} />
      <TimelineSection title="Experience" data={experienceData} />
      <SkillsSection skills={skillsData} />
    </article>
  );
};

export default Resume;