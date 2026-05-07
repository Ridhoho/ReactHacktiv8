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
    const sections = document.querySelectorAll(".content > section");
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

  const componentsArray = [About, Experience, Education, Skills, Interests, Awards]
  const componentsMap = componentsArray.map((Component) => {
    return( 
      <>
    <Component key={Component.name} />
    <hr />
    </>
  )
  });

  return (
    <div className="container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="content">
        {componentsMap}
      </main>
    </div>
  )
}

export default App





// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import AboutCompany from "./pages/AboutCompany";
// import AboutMe from "./pages/AboutMe";
// import Members from './pages/Members'
// import Member from './pages/Member'

    // <div className="container">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />}>
    //       <Route path="about-company" element={<AboutCompany />}></Route>
    //       <Route path="about-me" element={<AboutMe />}></Route>
    //     </Route>
    //     <Route path="/members" element={<Members />}>
    //       <Route path=":memberName" element={<Member />} />
    //     </Route>
    //   </Routes>
    // </div>
