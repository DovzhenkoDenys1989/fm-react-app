import React, { useState, useEffect } from 'react';

function Cat ({ x, y }) {
  const styles = {
    width: '50px',
    objectFit: 'cover',
    position: 'fixed',
    top: `${y+2}px`,
    left: `${x+2}px`,
    userSelect: 'none',
  };

  return (
    <img
      src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/68024/black-cat-face-clipart-md.png'
      alt='cat'
      style={styles}
    />
  );
}

function CatWithMouse () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
      <Cat x={x} y={y}/>
  );
}

export default CatWithMouse;
