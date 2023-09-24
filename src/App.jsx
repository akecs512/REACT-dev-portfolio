import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
// import TechTools from "./components/TechTools";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      {/* <TechTools /> */}
      <Footer />
    </>
  );
}

export default App;
