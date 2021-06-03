import React from 'react';
import style from './Week.module.sass';
import { addDays } from 'date-fns';
import Day from './Day';
export default function Week ({ startDate }) {
  const daysArray = new Array(7).fill(null).map((_, index) => {
    const currentDay = addDays(startDate, index);
    return <Day day={currentDay} key={currentDay.toLocaleDateString()} />;
  });
  return <div className={style.container}>{daysArray}</div>;
}
