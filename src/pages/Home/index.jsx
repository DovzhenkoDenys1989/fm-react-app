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
      <h2 className={style.hello}>Hello World REACT JS</h2>
      <img className={style.img}
        src='https://images.theconversation.com/files/378097/original/file-20210111-23-bqsfwl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        alt='World'
      />
    </div>
  );
}
export default Home;
