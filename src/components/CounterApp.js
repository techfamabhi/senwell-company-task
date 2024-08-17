import React, { useState, useCallback } from 'react';
import CounterButtons from './CounterButtons';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Counter: {count}</h1>
      <CounterButtons increment={increment} decrement={decrement} />
    </div>
  );
};

export default CounterApp;
