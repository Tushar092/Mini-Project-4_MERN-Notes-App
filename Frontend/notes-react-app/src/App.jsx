import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import CreateOrEditNote from "./Components/CreateOrEditNote";
import LandingPage from "./Components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createnotes" element={<CreateOrEditNote />} />
        <Route path="/editnotes" element={<CreateOrEditNote />} />
      </Routes>
    </>
  );
}

export default App;
