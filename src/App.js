import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import WindowSizes from './components/WindowSizes';
import Counter from './components/PracticeCounter/Counter';
import CounterPage from './pages/CounterPage';
import Header from './components/Header';
import Calendar from './components/Calendar';
import UserLoader from './components/UserLoader';
import PhonesLoader from './components/PhonesLoader';
import MouseTrackerPage from './pages/MouseTrackerPage';

function App (props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/about' component={About} />
        <Route path='/counter' component={CounterPage} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/users' component={UserLoader} />
        <Route path='/phones' component={PhonesLoader} />
        <Route path='/tracker' component={MouseTrackerPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => <div>HOME</div>;
const About = props => {
  console.log('ABOUT: ', props);

  setTimeout(() => {
    props.history.push('/');
  }, 5000);

  return <div>About</div>;
};
const Contacts = props => {
  console.log('CONTACTS: ', props);
  return <div>Contacts</div>;
};

const NotFound = () => <div>Error 404. Page not found.</div>;

export default App;
