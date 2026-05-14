import { members } from "./data";
import { useParams } from "react-router";

export default function MembersDetail() {
  const { member } = useParams();
  const selectedMember = members.find((name) => name === member);

  if (!selectedMember) {
    return <p>Member Not Found</p>;
  }

  return (
    <>
      <h2>{selectedMember}</h2>
      <p>This is the detail page of {selectedMember}</p>
    </>
  );
}
