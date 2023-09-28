import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
// import TechTools from "./components/TechTools";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

  

function App() {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
