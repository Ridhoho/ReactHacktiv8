import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DebounceSearchBar from "./DebounceSearchBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DebounceSearchBar />
  </StrictMode>,
);
