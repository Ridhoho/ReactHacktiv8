import "./App.css";
import AboutMeetupSection from "./AtomicDesign/organisms/AboutMeetupSection.jsx";
import Footer from "./AtomicDesign/organisms/Footer.jsx";
import Nav from "./AtomicDesign/organisms/Nav.jsx";
import HeaderContainer from "./AtomicDesign/organisms/Header_container.jsx";
import MembersSection from "./AtomicDesign/organisms/MembersSection.jsx";
import NextMeetupSection from "./AtomicDesign/organisms/NextMeetupSection.jsx";
import PastMeetupsSection from "./AtomicDesign/organisms/PastMeetupsSection.jsx";


function App() {
  return (
    <>
      <Nav />
      <HeaderContainer />
      <NextMeetupSection />
      <AboutMeetupSection />
      <MembersSection />
      <PastMeetupsSection />
      <Footer />
    </>
  );
}

export default App;
