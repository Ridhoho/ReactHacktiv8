import Hacktiv8Meetup from "../atoms/Hacktiv8Meetup.jsx";
import JoinUs from "../atoms/JoinUs.jsx";
import ProfilePicture from "../atoms/ProfilePicture.jsx";
import HeaderTable from "../molecules/Header_table.jsx";

export default function HeaderContainer() {
  return (
    <div className="header-container">
      <ProfilePicture />
      <div className="header-info">
        <Hacktiv8Meetup />
        <HeaderTable />
        <JoinUs />
      </div>
    </div>
  );
}
