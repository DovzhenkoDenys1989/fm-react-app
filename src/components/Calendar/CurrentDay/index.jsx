import React from 'react';
import { format } from 'date-fns';
import style from './CurrentDay.module.sass';

function CurrentDay() {
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const dayNumber = format(today, 'dd');
  const monthName = format(today, 'LLLL');
  const yearName = format(today, 'y');

  return (
    <div className={style.wrapper}>
      <div className={style.dayName}>{dayName}</div>
      <div className={style.dayNumber}>{dayNumber}</div>
      <div className={style.monthYear}>{monthName}</div>
      <div className={style.yearName}>{yearName}</div>
    </div>
  )
}

export default CurrentDay;