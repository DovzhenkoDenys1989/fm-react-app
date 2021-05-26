import React from "react";
import "./style.css";

function Button(props) {
  const { caption, handler } = props;
  return <button onClick={handler}>{caption}</button>;
}

export default Button;
