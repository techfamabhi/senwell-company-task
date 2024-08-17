import React from 'react';

const CounterButtons = React.memo(({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
});

export default CounterButtons;
