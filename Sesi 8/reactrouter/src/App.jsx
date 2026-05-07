import './App.css'
import { useState, useEffect } from 'react'
import Sidebar from "./components/Sidebar.jsx"
import About from "./components/About.jsx"
import Experience from "./components/Experience.jsx"
import Education from "./components/Education.jsx"
import Skills from "./components/Skills.jsx"
import Interests from "./components/Interests.jsx"
import Awards from "./components/Awards.jsx"

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll(".content section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const sections = [About, Experience, Education, Skills, Interests, Awards]

  return (
    <div className="container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="content">
        {sections.map((SectionComponent, index) => (
          <div key={SectionComponent.name} className="content-section-wrapper">
            <SectionComponent />
            {index < sections.length - 1 && <hr />}
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
