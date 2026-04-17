import MembersPicture from "../atoms/MembersPicture.jsx";
import MembersInfo from "../molecules/MembersInfo.jsx";
import SectionHeader from "../molecules/SectionHeader.jsx";

export default function MembersSection() {
  return (
    <>
      <SectionHeader title="Members" linkText="See all" />
      <div className="members-container">
        <MembersPicture />
        <MembersInfo />
      </div>
    </>
  );
}
