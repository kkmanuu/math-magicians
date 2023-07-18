import React, { useState } from 'react';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const newState = Calculator(state, buttonName);
    setState(newState);
  }
  return (
    <div className="calculator">
      <div className="buttons-div">
        <div className="input-field">{state.next || state.total || '0'}</div>
      </div>
      <div className="buttons-div">
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="operation" onClick={() => handleClick('÷')}>÷</button>
      </div>
      <div className="buttons-div">
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="operation" onClick={() => handleClick('x')}>x</button>
      </div>
      <div className="buttons-div">
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="operation" onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="buttons-div">
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="operation" onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="buttons-div">
        <button type="button" className="zero" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="operation" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
