import { Link, useNavigate } from "react-router";
import type { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ isLoggedIn, setIsLoggedIn }: NavbarProps) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About Us</Link>
      <span> | </span>
      <Link to="/members">Members</Link>
      <span> | </span>
      <Link to="/items">Items</Link>
      <span> | </span>
      {isLoggedIn && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}
