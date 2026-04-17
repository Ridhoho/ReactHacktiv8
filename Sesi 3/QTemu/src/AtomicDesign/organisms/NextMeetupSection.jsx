import MeetupDate from "../atoms/MeetupDate.jsx";
import MeetupHeadline from "../atoms/MeetupHeadline.jsx";
import MeetupText from "../atoms/MeetupText.jsx";
import SectionTitle from "../atoms/SectionTitle.jsx";
import NextMeetupParagraph from "../molecules/NextMeetupParagraph.jsx";

export default function NextMeetupSection() {
  return (
    <>
      <SectionTitle>Next Meetup</SectionTitle>
      <div className="next-meetup-container">
        <MeetupHeadline>Awesome meetup and event</MeetupHeadline>
        <MeetupDate>25 January 2019</MeetupDate>
        <NextMeetupParagraph />
        <MeetupText>Remember to bring a photo ID to get through building security.</MeetupText>
        <MeetupText>-----</MeetupText>
        <MeetupText>See you there!</MeetupText>
        <MeetupText>
          Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
        </MeetupText>
      </div>
    </>
  );
}
