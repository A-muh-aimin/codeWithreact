import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const lowOnClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const upOnClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const clearText = () => {
    let newtext = " ";
    setText(newtext);
  };

  const copytext = () => {
    let copytext = document.getElementById("mybox");
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext.value);
    alert("copied the text" + copytext.value);
  };

  const removeExtraspaces = () => {
    let result = text.replace(/^\s+|\s+$/gm, "");
    setText(result);
  };

  const handlOnClick = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
          id="mybox"
          rows="8"
          placeholder="Write your text here..."
          value={text}
          onChange={handlOnClick}
        ></textarea>
      </div>
      <hr style={{ color: props.mode === "dark" ? "white" : "black" }} />
      <button type="button" className="btn btn-primary" onClick={lowOnClick}>
        Lower case
      </button>
      <button
        type="button"
        className="btn btn-outline-primary m-3"
        onClick={upOnClick}
      >
        Upper case
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={clearText}
      >
        Clear Text
      </button>
      <button
        type="button"
        className="btn btn-outline-success m-3"
        onClick={copytext}
      >
        copy text
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={removeExtraspaces}
      >
        Remove extra spaces
      </button>

      <hr style={{ color: props.mode === "dark" ? "white" : "black" }} />
      <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {" "}
        Your Text Summary
      </h3>
      <hr style={{ color: props.mode === "dark" ? "white" : "black" }} />
      <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {text.split(" ").length} words
      </p>
      <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {text.length} characters , {0.008 * text.split(" ").length} time to read
      </p>
      <hr style={{ color: props.mode === "dark" ? "white" : "black" }} />
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {text}
      </div>
    </>
  );
};

export default TextForm;
