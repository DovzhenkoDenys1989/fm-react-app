import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import UserLoader from './components/UserLoader';
import WindowSizes from './components/WindowSizes';
import Counter from './components/PracticeCounter/Counter';
import CounterPage from './pages/CounterPage';

function App (props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/counter' component={CounterPage} />
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

const NotFound = () => <div>Error 404. Page not found.</div>

export default App;
