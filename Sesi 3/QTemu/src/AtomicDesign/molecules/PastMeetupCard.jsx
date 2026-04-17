import PastMeetupAttendance from "../atoms/PastMeetupAttendance.jsx";
import PastMeetupDate from "../atoms/PastMeetupDate.jsx";
import PastMeetupDescription from "../atoms/PastMeetupDescription.jsx";
import ViewButton from "../atoms/ViewButton.jsx";

export default function PastMeetupCard({ date, description, attendance }) {
  return (
    <div className="past-meetups-box">
      <PastMeetupDate>{date}</PastMeetupDate>
      <hr />
      <PastMeetupDescription>{description}</PastMeetupDescription>
      <PastMeetupAttendance>{attendance}</PastMeetupAttendance>
      <ViewButton />
    </div>
  );
}
