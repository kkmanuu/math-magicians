import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

function handleNumberButton(obj, buttonName) {
  if (buttonName === '0' && obj.next === '0') {
    return {};
  }

  if (obj.operation) {
    if (obj.next && obj.next !== '0') {
      return { ...obj, next: obj.next + buttonName };
    }
    return { ...obj, next: buttonName };
  }

  if (obj.next && obj.next !== '0') {
    return {
      next: obj.next + buttonName,
      total: null,
    };
  }

  return {
    next: buttonName,
    total: null,
  };
}

function handleDecimalButton(obj) {
  if (obj.next) {
    if (obj.next.includes('.')) {
      return { ...obj };
    }
    return { ...obj, next: `${obj.next}.` };
  }

  if (obj.operation) {
    return { ...obj, next: '0.' };
  }

  if (obj.total) {
    if (obj.total.includes('.')) {
      return {};
    }
    return { ...obj, next: `${obj.total}.` };
  }

  return { ...obj, next: '0.' };
}

function handleEqualButton(obj) {
  if (obj.next && obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: null,
    };
  }
  // '=' with no operation, nothing to do
  return {};
}

function handlePlusMinusButton(obj) {
  if (obj.next) {
    return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
  }
  if (obj.total) {
    return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
  }
  return {};
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
    return handleNumberButton(obj, buttonName);
  }

  if (buttonName === '.') {
    return handleDecimalButton(obj);
  }

  if (buttonName === '=') {
    return handleEqualButton(obj);
  }

  if (buttonName === '+/-') {
    return handlePlusMinusButton(obj);
  }

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
