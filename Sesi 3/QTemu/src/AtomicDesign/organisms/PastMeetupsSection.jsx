import PastMeetupCard from "../molecules/PastMeetupCard.jsx";
import SectionHeader from "../molecules/SectionHeader.jsx";

export default function PastMeetupsSection() {
  return (
    <>
      <SectionHeader title="Past Meetups" linkText="See all" />
      <div className="past-meetups-container">
        <PastMeetupCard
          date="27 November 2017"
          description="#39 JakartaJS April Meetup with kumparan"
          attendance="139 went"
        />
        <PastMeetupCard
          date="27 October 2017"
          description="#38 JakartaJS April Meetup with BliBli"
          attendance="113 went"
        />
        <PastMeetupCard
          date="27 September 2017"
          description="#37 JakartaJS April Meetup with Hacktiv8"
          attendance="110 went"
        />
      </div>
    </>
  );
}
