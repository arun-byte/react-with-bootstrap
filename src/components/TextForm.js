import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    console.log("button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied successsfully!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log("ON Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              value={text}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "light" ? "#042743" : "black",
              }}
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleupClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "grey",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
