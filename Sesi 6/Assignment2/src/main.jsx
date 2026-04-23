import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Assignment2 from "./Assignment2.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Assignment2 />
  </StrictMode>,
)
