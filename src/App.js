import style from './App.module.sass';
import React, { useState } from 'react';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';

function App (props) {
  console.dir(SIGN_UP_SCHEMA);
  const data = SIGN_UP_SCHEMA.validateSync({
    password: 'Ab1@udhr9u2ucsherd',
    email: 'test@gmail.com',
    lastName: 'Test',
    firstName: 'Name',
  });
  console.log(data);
  return <></>;
}

export default App;
