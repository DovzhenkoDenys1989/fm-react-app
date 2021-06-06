import React, { useState, useEffect } from "react";
import Button from "../Button";
import ControlledNumInput from "../ControlledNumInput";
import Step from "./Step";

import style from "./Counter.module.sass";

function Counter(props) {
  const toggleMode = () => setIsIncrement(!isIncrement);
  const toggleAutoClick = () => setIsAutoClick(!isAutoClick);

  const handleCount = () =>
    isIncrement ? setCounter(counter + step) : setCounter(counter - step);

  const handleChangeDelay = (newValue) => {
    setClicksPerSecond(newValue);
    setDelay(1000 / newValue);
  };

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [isIncrement, setIsIncrement] = useState(true);
  const [isAutoClick, setIsAutoClick] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [clicksPerSecond, setClicksPerSecond] = useState(1);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (isAutoClick) {
      setTimer(setTimeout(handleCount, delay));
    }
  }, [isIncrement, isAutoClick, delay, step, counter]);

  useEffect(() => {
    clearTimeout(timer);
  }, [isIncrement, delay, step, isAutoClick]);

  const countButtonCaption = isIncrement ? "Increment" : "Decrement";
  return (
    <>
      <div className={style.container}>
        <div>Counter:{counter}</div>
        <Step step={step} setStep={setStep} />
        <ControlledNumInput
          caption="Количество нажатий в секунду (Press Enter)"
          value={clicksPerSecond}
          setValue={handleChangeDelay}
          min={1}
          max={1000}
        />
        <p>Auto click mode: {isAutoClick ? "Enabled" : "Disabled"}</p>
        <div className={style.controls}>
          <Button handler={toggleMode} caption={"Change mode"} />
          <Button handler={handleCount} caption={countButtonCaption} />
          <Button handler={toggleAutoClick} caption="Auto click" />
        </div>
      </div>
    </>
  );
}
export default Counter;
