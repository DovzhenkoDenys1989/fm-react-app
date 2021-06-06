import React, { useState } from 'react';
import Counter from '../../components/Counter';
import Step from './Step';
import style from './CounterPage.module.sass';

function CounterPage (props) {
  const [step, setStep] = useState(1);
  return (
    <div className={style.container}>
      <Step step={step} setStep={setStep} />
      <Counter step={step} />
    </div>
  );
}

export default CounterPage;
