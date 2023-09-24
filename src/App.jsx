import Header from "./components/Header";
import Section from "./components/Section";
import MyNavbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <Section title="Adrienne's Page" subtitle="Stories of annoying sister" />
    </div>
  );
}

export default App;
