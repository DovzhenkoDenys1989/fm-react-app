import "./App.css";
import React, { useState } from "react";
import SelectedUserList from "./components/SelectedUserList";
import UserList from "./components/UserList";
import AlohaDashboard from "./components/AlohaDashboard";
import Aloha from "./components/AlohaDashboard/Aloha";
import UserCard from "./components/UserList/UserCard";
import ResponsiveMediaWrapper from "./components/ResponsiveMediaWrapper";
import ArticleWrapper from "./components/ArticleWrapper";
import Calendar from "./components/Calendar";

const usersDB = [
  {
    id: 1,
    firstname: "John",
    lastname: "Smith",
  },
  {
    id: 2,
    firstname: "Bob",
    lastname: "Brown",
  },
  {
    id: 3,
    firstname: "Sara",
    lastname: "Smith",
  },
  {
    id: 4,
    firstname: "Mary",
    lastname: "Black",
  },
];

/*
  Перепишите Aloha, App как функциональные компоненты
*/

function App(props) {
  return (
    <>
      <Calendar />
    </>
  );
}

export default App;
