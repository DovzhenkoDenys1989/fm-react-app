import { useState, useEffect, useCallback } from 'react';

export default function useMouse () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = useCallback(event => {
    setX(event.clientX);
    setY(event.clientY);
  }, []);

  return { x, y };
}
