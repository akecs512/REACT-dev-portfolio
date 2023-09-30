import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
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
