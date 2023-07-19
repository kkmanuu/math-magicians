import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

function handleNumber(obj, buttonName) {
  if (buttonName === '0' && obj.next === '0') {
    return {};
  }

  if (obj.operation || obj.next === '0') {
    return { ...obj, next: obj.next ? obj.next + buttonName : buttonName };
  }

  return {
    next: buttonName,
    total: null,
  };
}

function handleDecimal(obj) {
  if (obj.next && obj.next.includes('.')) {
    return { ...obj };
  }

  if (obj.operation || !obj.next) {
    return { ...obj, next: obj.next ? `${obj.next}.` : '0.' };
  }

  if (obj.total && obj.total.includes('.')) {
    return {};
  }

  return { ...obj, next: `${obj.total}.` };
}

function handleEquals(obj) {
  if (obj.next && obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: null,
    };
  }

  return {};
}

function handleNegate(obj) {
  const target = obj.next ? 'next' : 'total';
  const newValue = (-1 * parseFloat(obj[target])).toString();

  return { ...obj, [target]: newValue };
}

function handleOperation(obj, buttonName) {
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    return handleNumber(obj, buttonName);
  }

  if (buttonName === '.') {
    return handleDecimal(obj);
  }

  if (buttonName === '=') {
    return handleEquals(obj);
  }

  if (buttonName === '+/-') {
    return handleNegate(obj);
  }

  return handleOperation(obj, buttonName);
}
