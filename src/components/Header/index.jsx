import React from 'react';
import style from './Header.module.sass';
import NavItem from './NavItem';

function Header () {
  /*
     1. Сделать навигационное меню с использованием Link или NavLink
     2. Стилизовать навигационное меню
     3. Создать страницы:
      3.1 SignUpPage (с использованием компонента SignUpForm)
      3.2 UsersPage (с использованием компонента UserList)
      3.3 CounterPage (с использованием компонента Counter)
      3.4 NotFoundPage (Ошибка 404)
  */
  return (
    <header className={style.header}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/contacts'>Contacts</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
