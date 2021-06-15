import React from 'react';
import style from './ResponsiveMediaWrapper.module.sass';
import cx from 'classnames';
import PropTypes from 'prop-types';

function ResponsiveMediaWrapper ({ className, children, rate, ...restProps }) {
  const inlineStyle = {
    paddingTop: rate ? `calc(100% * ${rate})` : 'calc(100% * 9 / 16)',
  };

  return (
    <div className={cx(style.outerWrapper, className)} {...restProps}>
      <div className={style.innerWrapper} style={inlineStyle}>{children}</div>
    </div>
  );
}

ResponsiveMediaWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default ResponsiveMediaWrapper;
