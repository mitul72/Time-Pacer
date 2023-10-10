import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Builder from "./components/Builder";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="day" />
          <Route path="build" element={<Builder />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
