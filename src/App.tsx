import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <main>
      <Home/>
      </main>
    </>
  );
}

export default App;
