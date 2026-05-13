import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import AboutCompany from "./components/AboutCompany";
import AboutMe from "./components/AboutMe";
import MembersDetail from "./components/MembersDetail";
import Items from "./components/Items";
import Login from "./components/Login";
import ItemsDetail from "./components/ItemsDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <hr />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="/members" element={<Members />}>
          <Route path=":member" element={<MembersDetail />} />
        </Route>
        <Route
          path="/items"
          element={isLoggedIn ? <Items /> : <Navigate to="/login" />}
        >
          <Route path=":itemId" element={<ItemsDetail />} />
        </Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
