import { Link, Outlet } from "react-router";
import { members } from "./data";

export default function Members() {
  return (
    <main>
      <h1>Members page</h1>
      <p>Select a member to be shown</p>
      <br />
      {members.map((member, index) => (
        <span key={member}>
          <Link to={`/members/${member}`}>{member}</Link>
          {index < members.length - 1 && <span> | </span>}
        </span>
      ))}
      <Outlet />
    </main>
  );
}
