import React from "react";
import cx from 'classnames';
import style from "./FormInput.module.css";

export default function FormInput(props) {
  const {value, onChange = () => {}, isValid, placeholder, type = "text"} = props;
  return (
    <input
      value={value}
      onChange={onChange}
      className={cx(
        style.input,
        { [style.invalidInput]: !isValid },
        { [style.validInput]: isValid }
      )}
      type={type}
      placeholder={placeholder}
    />
  );
}
