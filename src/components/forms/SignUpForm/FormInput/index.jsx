import React from 'react';
import cx from 'classnames';
import style from './FormInput.module.scss';

export default function FormInput (props) {
  const {
    value,
    onChange = () => {},
    validationRegex,
    ...other
  } = props;
  const isValid = value.length === 0 || validationRegex.test(value);
  return (
    <input
      value={value}
      onChange={onChange}
      className={cx(style.input, { [style.invalidInput]: !isValid })}
      {...other}
    />
  );
}
