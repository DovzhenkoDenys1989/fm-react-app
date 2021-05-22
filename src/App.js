import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting />
    </>
  );
}

export default App;
