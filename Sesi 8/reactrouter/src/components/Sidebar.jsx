export default function Sidebar({activeSection, setActiveSection}) {
  return (
    <div className="sidebar">
      <img src="../image/profile.png" alt="ProfilePicture" />
      <a 
      href="#about"
      onClick={()=> setActiveSection("about")}
      className={activeSection === "about" ? "active" : ""}
      >ABOUT</a>
      <a
      href="#experience"
      onClick={()=>setActiveSection("experience")}
      className={activeSection === "experience" ? "active" : ""}
      >EXPERIENCE</a>
      <a
      href="#education"
      onClick={()=>setActiveSection("education")}
      className={activeSection === "education" ? "active" : ""}
      >EDUCATION</a>
      <a
      href="#skills"
      onClick={()=>setActiveSection("skills")}
      className={activeSection === "skills" ? "active" : ""}
      >SKILLS</a>
      <a
      href="#interests"
      onClick={()=>setActiveSection("interests")}
      className={activeSection === "interests" ? "active" : ""}
      >INTERESTS</a>
      <a
      href="#awards"
      onClick={()=>setActiveSection("awards")}
      className={activeSection === "awards" ? "active" : ""}
      >AWARDS</a>
    </div>
  );
}
