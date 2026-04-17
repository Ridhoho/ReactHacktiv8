import MeetupText from "../atoms/MeetupText.jsx";

export default function NextMeetupParagraph() {
  return (
    <div className="next-meetup-paragraph">
      <MeetupText>Hello, JavaScript & Node.js Ninjas!</MeetupText>
      <MeetupText>
        Get ready for our monthly meetup JakartaJS! This will be our fifth
        meetup of 2018!
      </MeetupText>
      <MeetupText>
        The meetup format will contain some short stories and technical talks.
      </MeetupText>
      <MeetupText>
        If you have a short announcement you'd like to share with the audience,
        you may do so during open mic announcements.
      </MeetupText>
    </div>
  );
}
