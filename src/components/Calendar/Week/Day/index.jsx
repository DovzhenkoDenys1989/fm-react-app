import React from 'react';
import { format } from 'date-fns';
import style from './Day.module.sass';

export default function Day ({ day }) {
  return <div className={style.container}>{format(day, 'dd')}</div>;
}
