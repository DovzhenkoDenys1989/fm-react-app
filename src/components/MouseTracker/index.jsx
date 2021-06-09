import React, { useState, useEffect } from 'react';

function MouseTracker () {
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
    <div style={{ height: '100vh' }}>
      <h1>Перемещайте курсор мыши!</h1>
      <p>
        Текущее положение курсора мыши: ({x}, {y})
      </p>
    </div>
  );
}
/*
class MouseTracker extends Component {
  constructor (props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount () {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render () {
    return (
      <div style={{ height: '100vh' }}>
        <h1>Перемещайте курсор мыши!</h1>
        <p>
          Текущее положение курсора мыши: ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}
*/
export default MouseTracker;
