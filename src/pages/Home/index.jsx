import React, { useContext } from 'react';
import cx from 'classnames';
import style from './Home.module.sass';
import { ThemeContext } from 'contexts';
import CONSTANTS from 'constants.js';
const { THEMES } = CONSTANTS;

/*
  1. Переделать переключение тем на хуки
  2. Добавить переключение темы в Home
*/
function Home () {
  const [theme] = useContext(ThemeContext);

  const classes = cx(style.container, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });

  return (
    <div className={classes}>
      <h1>HOME PAGE</h1>
    </div>
  );
}
export default Home;
