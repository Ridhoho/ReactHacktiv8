import { Link, Outlet } from "react-router";

export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>This is my About Us page</p>
      <br />
      <Link to="about-company">About The Company</Link>
      <span> | </span>
      <Link to="about-me">About Me</Link>
      <Outlet />
    </main>
  );
}
