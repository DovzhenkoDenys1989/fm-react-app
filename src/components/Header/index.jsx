import React from 'react';
import cx from 'classnames';
import style from './Header.module.sass';
import NavItem from './NavItem';
import withTheme from '../HOCs/withTheme';
import { UserContext } from '../../contexts';
import UserContainer from './UserContainer';
import CONSTANTS from '../../constants';
import Button from '../Button';
const { THEMES } = CONSTANTS;

function Header ({ theme, setTheme }) {
  /*
     1. Сделать навигационное меню с использованием Link или NavLink
     2. Стилизовать навигационное меню
     3. Создать страницы:
      3.1 SignUpPage (с использованием компонента SignUpForm)
      3.2 UsersPage (с использованием компонента UserList)
      3.3 CounterPage (с использованием компонента Counter)
      3.4 NotFoundPage (Ошибка 404)
  */
  const classes = cx(style.header, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });

  const toggleTheme = () =>
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);

  return (
    <header className={classes}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/contacts'>Contacts</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
          <NavItem to='/calendar'>Calendar</NavItem>
          <NavItem to='/tracker'>Tracker</NavItem>
        </ul>
      </nav>
      <Button caption='Change theme' onClick={toggleTheme}></Button>
      <UserContext.Consumer>
        {user => <UserContainer user={user} />}
      </UserContext.Consumer>
    </header>
  );
}

export default withTheme(Header);
