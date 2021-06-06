import React, { useState, useEffect } from 'react';
import Button from '../Button';
import ControlledNumInput from '../ControlledNumInput';
import Step from './Step';
import style from './Counter.module.sass';

function Counter () {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [isIncrement, setIsIncrement] = useState(true);
  const [isAutoClick, setIsAutoClick] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [clicksPerSecond, setClicksPerSecond] = useState(1);
  const [timer, setTimer] = useState(null);

  const toggleMode = () => setIsIncrement(!isIncrement);
  const toggleAutoClick = () => setIsAutoClick(!isAutoClick);

  const handleCount = () =>
    isIncrement ? setCounter(counter + step) : setCounter(counter - step);

  const handleChangeDelay = newValue => {
    setClicksPerSecond(newValue);
    setDelay(1000 / newValue);
  };

  useEffect(() => {
    if (isAutoClick) {
      setTimer(setTimeout(handleCount, delay));
    }
  }, [isIncrement, isAutoClick, delay, step, counter]);

  useEffect(() => {
    clearTimeout(timer);
  }, [isIncrement, delay, step, isAutoClick]);

  const countButtonCaption = isIncrement ? 'Increment' : 'Decrement';
  return (
    <>
      <div className={style.container}>
        <div className={style.caption}>Counter:{counter}</div>
        <Step step={step} setStep={setStep} />
        <ControlledNumInput
          caption='Number of clicks per second:'
          value={clicksPerSecond}
          setValue={handleChangeDelay}
          min={1}
          max={1000}
        />
        <p>Auto click mode: {isAutoClick ? 'Enabled' : 'Disabled'} </p>
        <div className={style.controls}>
          <Button handler={toggleMode} caption={'Change mode'} />
          <Button handler={handleCount} caption={countButtonCaption} />
          <Button handler={toggleAutoClick} caption='Auto Click' />
        </div>
      </div>
    </>
  );
}

export default Counter;
