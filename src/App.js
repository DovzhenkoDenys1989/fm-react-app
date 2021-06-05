import './App.css';
import React, { useState } from 'react';
import UserLoader from './components/UserLoader';
import WindowSizes from './components/WindowSizes';

const usersDB = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Smith',
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Brown',
  },
  {
    id: 3,
    firstname: 'Sara',
    lastname: 'Smith',
  },
  {
    id: 4,
    firstname: 'Mary',
    lastname: 'Black',
  },
];

/*
  Перепишите Aloha, App как функциональные компоненты
*/

function App (props) {
  return (
    <>
      <WindowSizes />
      <UserLoader /> 
    </>
  );
}

export default App;
