import React from 'react';
import style from './Button.module.css';
import cx from 'classnames';

function Button (props) {
  const { caption, className, ...others } = props;
  return (
    <button className={cx(style.blueBtn, className)} {...others}>
      {caption}
    </button>
  );
}

export default Button;
