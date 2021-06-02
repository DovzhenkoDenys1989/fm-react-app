import "./App.css";
import React, { useState } from "react";
import SelectedUserList from "./components/SelectedUserList";
import UserList from "./components/UserList";
import AlohaDashboard from "./components/AlohaDashboard";
import Aloha from "./components/AlohaDashboard/Aloha";
import UserCard from "./components/UserList/UserCard";
import ResponsiveMediaWrapper from "./components/ResponsiveMediaWrapper";

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
  const user = {
    id: 4,
    firstname: "Mary",
    lastname: "Black",
  };
  return (
    <>
      <UserCard user={user}/>
      <div style={{with: '50%'}}>
      <ResponsiveMediaWrapper> 
      <img
          src="https://cdn.wallpapersafari.com/78/72/HhMJ6K.jpg"
          alt="image"
        />   
      </ResponsiveMediaWrapper>
      </div>
    </>
  );
}

export default App;
