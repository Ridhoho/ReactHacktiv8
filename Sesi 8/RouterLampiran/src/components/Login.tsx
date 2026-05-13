import { useNavigate } from "react-router";
import type { Dispatch, SetStateAction } from "react";

type LoginProps = {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export default function Login({ setIsLoggedIn }: LoginProps) {
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/items");
  }

  return (
    <main>
      <h1>Login Page</h1>
      <p>Klik the button to login</p>
      <button onClick={handleLogin}>
        Login
      </button>
    </main>
  );
}
