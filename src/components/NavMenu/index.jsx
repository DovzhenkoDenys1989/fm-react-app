import React, { useState, useEffect, useRef } from 'react';
import NavItem from '../NavItem';
import Close from './Close';
import style from './NavMenu.module.sass';

function NavMenu () {
  const navRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  console.log(navRef);
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isOpen && !navRef.current.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);
  return (
    <nav className={style.navMenu} ref={navRef}>
      <Close isOpen={isOpen} setOpen={setOpen} />
      {isOpen && (
        <ul className={style.list}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/contacts'>Contacts</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
          <NavItem to='/calendar'>Calendar</NavItem>
          <NavItem to='/tracker'>Tracker</NavItem>
        </ul>
      )}
    </nav>
  );
}

export default NavMenu;
