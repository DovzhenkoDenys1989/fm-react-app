import React from 'react'
import Button from '../../../Button'
import style from './CalendarControls.module.sass';

export default function CalendarControls({openPrevMonth, openNextMonth, openPrevYear, openNextYear}) {
  return (
    <div className={style.btnContainer}>
      <Button className={style.btn} onClick={openPrevYear}>{'<< Year'}</Button>
      <Button className={style.btn} onClick={openPrevMonth}>{'< Month'}</Button>
      <Button className={style.btn} onClick={openNextMonth}>{'> Month'}</Button>
      <Button className={style.btn} onClick={openNextYear}>{'>> Year'}</Button>
    </div>
  )
}
