import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ControlledNumInput from '../../ControlledNumInput';
import style from './Step.module.sass';

function Step (props) {
  const { step, setStep } = props;
  return (
    <>
      <div className={style.step}>Step: {step}</div>
      <ControlledNumInput
        caption='Step Setting:'
        value={step}
        setValue={setStep}
        min={1}
        max={100}
      />
    </>
  );
}

Step.defaultProps = {
  step: 1,
  setStep: () => {},
};

Step.propType = {
  step: PropTypes.number,
  setStep: PropTypes.func.isRequired,
};

export default Step;
