import React from 'react';
import { ThemeContext } from '../../../contexts';

function withTheme (WrappedComponent) {
  return function ComponentWithTheme (props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return (
            <WrappedComponent theme={theme} setTheme={setTheme} {...props} />
          );
        }}
      </ThemeContext.Consumer>
    );
  };
}

export default withTheme;
