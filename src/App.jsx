import Header from "./components/Header";
import Section from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
// import TechTools from "./components/TechTools";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Projects />
      {/* <TechTools /> */}
      <Footer />
    </div>
  );
}

export default App;
