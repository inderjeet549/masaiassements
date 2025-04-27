import React, { useState } from 'react';

function CounterWithStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleIncrease() {
    setCount(count + Number(step));
  }

  function handleDecrease() {
    setCount(prev => Math.max(0, prev - Number(step)));
  }

  function handleStepChange(e) {
    setStep(e.target.value);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          placeholder="Enter step value"
          min="1"
        />
      </div>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease} style={{ marginLeft: '10px' }}>
        Decrease
      </button>
    </div>
  );
}

export default CounterWithStep;