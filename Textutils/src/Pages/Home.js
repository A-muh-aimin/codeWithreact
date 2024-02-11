import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TextForm from "../Components/TextForm";
import Alert from "../Components/Alert";

const Home = () => {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Lightmode change to darkmode", "successfully");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Darkmode change to lightmode", "successfully");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <Navbar title="Text-Utiles" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter your text here" mode={mode} />
      </div>
    </>
  );
};

export default Home;
