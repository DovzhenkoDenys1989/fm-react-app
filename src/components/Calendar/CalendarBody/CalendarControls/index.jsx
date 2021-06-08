import React from 'react'
import Button from '../../../Button'

export default function CalendarControls({openPrevMonth, openNextMonth, openPrevYear, openNextYear}) {
  return (
    <div>
      <Button onClick={openPrevYear}>{'<<'}</Button>
      <Button onClick={openPrevMonth}>{'<'}</Button>
      <Button onClick={openNextMonth}>{'>'}</Button>
      <Button onClick={openNextYear}>{'>>'}</Button>
    </div>
  )
}
