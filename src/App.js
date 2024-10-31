import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Disable dark mode");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      setText("Enable dark mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="about textUtils"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />
      <div className="container">
        <TextForm heading="Enter the Text to Below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
