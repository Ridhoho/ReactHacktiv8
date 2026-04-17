import TrLocation from "../atoms/Tr_location.jsx";
import TrMembers from "../atoms/Tr_members.jsx";
import TrOrganizers from "../atoms/Tr_organizers.jsx";

export default function HeaderTable() {
  return (
    <table>
      <tbody>
        <TrLocation />
        <TrMembers />
        <TrOrganizers />
      </tbody>
    </table>
  );
}
