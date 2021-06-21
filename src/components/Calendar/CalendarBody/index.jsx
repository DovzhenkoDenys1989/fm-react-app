import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachWeekOfInterval,
  format,
  addMonths,
  subMonths,
  addYears,
  subYears,
} from 'date-fns';
import style from './CalendarBody.module.sass';
import Week from './Week';
import CalendarHeader from './CalendarHeader';
import CalendarControls from './CalendarControls';

function CalendarBody () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const openPrevMonth = () =>
    setCurrentDate(currentDate => subMonths(currentDate, 1));

  const openNextMonth = () =>
    setCurrentDate(currentDate => addMonths(currentDate, 1));

  const openPrevYear = () =>
    setCurrentDate(currentDate => subYears(currentDate, 1));

  const openNextYear = () =>
    setCurrentDate(currentDate => addYears(currentDate, 1));

  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week
      startDate={weekStartDate}
      currentDate={currentDate}
      key={weekStartDate.toLocaleDateString()}
    />
  ));
  return (
    <div className={style.container}>
      <h3 className={style.titleMonthYear}>{format(currentDate, 'MMMM yyyy')}</h3>
      <CalendarControls
        openPrevMonth={openPrevMonth}
        openNextMonth={openNextMonth}
        openPrevYear={openPrevYear}
        openNextYear={openNextYear}
      />
      <CalendarHeader />
      {weeks}
    </div>
  );
}

export default CalendarBody;
