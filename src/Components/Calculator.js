/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Button = ({ label, type, handleClick }) => (
  <button type="button" className={type} onClick={handleClick}>
    {label}
  </button>
);

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  const renderButton = (label, type) => (
    <Button key={label} label={label} type={type} handleClick={() => handleClick(label)} />
  );

  return (
    <div className="calculator">
      <div className="buttons-div">
        <div className="input-field">{state.next || state.total || '0'}</div>
      </div>
      <div className="buttons-div">
        {[
          ['AC', 'operation'],
          ['+/-', 'operation'],
          ['%', 'operation'],
          ['÷', 'operation'],
        ].map(([label, type]) => renderButton(label, type))}
      </div>
      <div className="buttons-div">
        {[
          ['7', 'number'],
          ['8', 'number'],
          ['9', 'number'],
          ['x', 'operation'],
        ].map(([label, type]) => renderButton(label, type))}
      </div>
      <div className="buttons-div">
        {[
          ['4', 'number'],
          ['5', 'number'],
          ['6', 'number'],
          ['-', 'operation'],
        ].map(([label, type]) => renderButton(label, type))}
      </div>
      <div className="buttons-div">
        {[
          ['1', 'number'],
          ['2', 'number'],
          ['3', 'number'],
          ['+', 'operation'],
        ].map(([label, type]) => renderButton(label, type))}
      </div>
      <div className="buttons-div">
        {[
          ['0', 'number zero'],
          ['.', 'operation'],
          ['=', 'operation'],
        ].map(([label, type]) => renderButton(label, type))}
      </div>
    </div>
  );
};

export default Calculator;
