import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import AboutThing from "../Components/AboutThing";
const About = () => {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Text-Utiles"
        about="About us"
        mode={mode}
        togglemode={togglemode}
      />
      <div className="container">
        <hr />
        <div className="container">
          <AboutThing />
        </div>
      </div>
    </>
  );
};

export default About;
