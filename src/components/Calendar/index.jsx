import React from 'react'
import style from './Calendar.module.sass';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';

export default function Calendar() {
  return (
    <div className={style.container}>
      <div className={style.innerWrapper}>
      <CurrentDay />
      <CalendarBody />
      </div>
    </div>
    );
  
}
