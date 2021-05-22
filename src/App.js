import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Aloha from "./components/Aloha";

function App() {
  return (
    <>
      <Aloha name="John" surname="Smith" />
      <Aloha name="Bob" surname="Brown"/>
      <Aloha />
    </>
  );
}

export default App;
