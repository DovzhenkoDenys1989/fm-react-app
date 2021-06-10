import React from 'react';
import MouseTracker from '../MouseTracker';

function MouseCoordinatesDisplay () {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <div style={{ height: '100vh' }}>
          <h1>Перемещайте курсор мыши!</h1>
          <p>
            Текущее положение курсора мыши: ({x}, {y})
          </p>
        </div>
      )}
    </MouseTracker>
  );
}

export default MouseCoordinatesDisplay;
