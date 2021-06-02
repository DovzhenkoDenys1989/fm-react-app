import React from "react";
import style from "./ResponsiveMediaWrapper.module.sass";
import cx from "classnames";

function ResponsiveMediaWrapper({ className, children, ...restProps }) {
  return (
    <div className={cx(style.outerWrapper, className)} {...restProps}>
      <div className={style.innerWrapper}>
        {children}
      </div>
    </div>
  );
}

export default ResponsiveMediaWrapper;
