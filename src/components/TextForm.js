import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    const newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "white" : "dark",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleloClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something int the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

// TextForm.defaultProps = {
//   heading: "Please type Text",
// };
