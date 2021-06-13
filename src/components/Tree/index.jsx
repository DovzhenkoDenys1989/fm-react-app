import React from 'react';
import Parent from './Parent';

function Tree (props) {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  return (
    <div style={style}>
      <Parent />
    </div>
  );
}

export default Tree;
