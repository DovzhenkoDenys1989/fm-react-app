import React, { useState } from 'react';
import style from './Calendar.module.sass';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';
import Week from './Week';
import CalendarHeader from './CalendarHeader';

export default function Calendar () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: setDate(currentDate, 1),
    end: endOfMonth(currentDate),
  });

  console.dir(weeksInMonthArray);

  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div className={style.container}>
      <CalendarHeader />
      {weeks}
    </div>
  );
}
