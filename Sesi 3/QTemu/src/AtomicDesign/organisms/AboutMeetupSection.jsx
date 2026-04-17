import AboutText from "../atoms/AboutText.jsx";
import SectionTitle from "../atoms/SectionTitle.jsx";

export default function AboutMeetupSection() {
  return (
    <>
      <SectionTitle>About Meetup</SectionTitle>
      <div className="about-meetup-container">
        <AboutText>
          Come and meet other developers interested in the JavaScript and it's
          library in the Greater Jakarta Area.
        </AboutText>
        <AboutText>Twitter: @JakartaJS and we use the hastag #jakartajs</AboutText>
      </div>
    </>
  );
}
